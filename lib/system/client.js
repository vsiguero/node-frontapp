System.register(["superagent", "./analytics", "./contacts", "./channels", "./error", "./inboxes"], function (exports_1, context_1) {
    "use strict";
    var request, analytics_1, contacts_1, channels_1, error_1, inboxes_1, FrontAppClient;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (request_1) {
                request = request_1;
            },
            function (analytics_1_1) {
                analytics_1 = analytics_1_1;
            },
            function (contacts_1_1) {
                contacts_1 = contacts_1_1;
            },
            function (channels_1_1) {
                channels_1 = channels_1_1;
            },
            function (error_1_1) {
                error_1 = error_1_1;
            },
            function (inboxes_1_1) {
                inboxes_1 = inboxes_1_1;
            }
        ],
        execute: function () {
            FrontAppClient = class FrontAppClient {
                constructor(token, apiUrl) {
                    this.token = token;
                    if (!this.token || this.token === undefined) {
                        throw new Error('Could not construct a client with those parameters');
                    }
                    this.API_URL = apiUrl || 'https://api2.frontapp.com';
                    // Set initial request headers
                    this._request = request
                        .agent()
                        .set('Authorization', 'Bearer ' + this.token)
                        .set('Accept', 'application/json')
                        .set('User-Agent', 'frontapp/1.0.0');
                    this.analytics = new analytics_1.Analytics(this);
                    this.channels = new channels_1.Channels(this);
                    this.contacts = new contacts_1.Contacts(this);
                    this.inboxes = new inboxes_1.Inboxes(this);
                    // Promises are default
                    this.promises = true;
                }
                useCallbacks() {
                    this.promises = false;
                    return this;
                }
                async promiseProxy(f, req) {
                    if (this.promises || !f) {
                        try {
                            const res = await req;
                            // console.log(res.body);
                            const frontError = res.body._error;
                            const hasErrors = frontError && frontError.status !== 200;
                            if (hasErrors) {
                                throw new error_1.FrontAppError(frontError.message, frontError.title, frontError.details, frontError.status);
                            }
                            return res.body;
                        }
                        catch (err) {
                            // console.log(err);
                            throw err;
                        }
                    }
                    else {
                        req.end((_err, res) => {
                            // console.log('callback res', res.body);
                            if (res.error && res.body && res.body._error) {
                                const frontError = res.body._error;
                                f(new error_1.FrontAppError(frontError.message || frontError.title, frontError.title, frontError.details, frontError.status), null);
                            }
                            else {
                                f(null, res.body);
                            }
                        });
                    }
                }
                async put(endpoint, data, f) {
                    return this.promiseProxy(f, this._request.put(`${this.API_URL}${endpoint}`).send(data));
                }
                async post(endpoint, data, f) {
                    return this.promiseProxy(f, this._request.post(`${this.API_URL}${endpoint}`).send(data));
                }
                async postMessageWithAttachment(endpoint, data, file, f) {
                    return this.promiseProxy(f, this._request
                        .post(`${this.API_URL}${endpoint}`)
                        .set('Content-Type', 'multipart/form-data')
                        .field('sender[contact_id]', data.contact_id.toString())
                        .field('sender[handle]', data.handle.toString())
                        .field('body', data.body.toString())
                        .field('to[0]', data.to.toString())
                        .attach('attachments', file.buffer, {
                        filename: file.name.toString(),
                        contentType: file.mimetype.toString(),
                    }));
                }
                async get(endpoint, data, f) {
                    return this.promiseProxy(f, this._request.get(`${this.API_URL}${endpoint}`).query(data));
                }
                async nextPage(paginationObject, f) {
                    return this.promiseProxy(f, this._request.get(paginationObject.next));
                }
                async delete(endpoint, data, f) {
                    return this.promiseProxy(f, this._request.delete(`${this.API_URL}${endpoint}`).query(data));
                }
                callback(f, res) {
                    if (!f) {
                        return;
                    }
                    if (f.length >= 2) {
                        const frontError = res.body._error;
                        const hasErrors = frontError && frontError.status !== 200;
                        if (hasErrors) {
                            f(new error_1.FrontAppError(frontError.message, frontError.title, frontError.details, frontError.status), null);
                        }
                        else {
                            f(null, res);
                        }
                    }
                    else {
                        f(res);
                    }
                }
            };
            exports_1("FrontAppClient", FrontAppClient);
        }
    };
});
