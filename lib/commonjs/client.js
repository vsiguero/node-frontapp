"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("superagent"));
var analytics_1 = require("./analytics");
var contacts_1 = require("./contacts");
var channels_1 = require("./channels");
var error_1 = require("./error");
var inboxes_1 = require("./inboxes");
var groups_1 = require("./groups");
var teams_1 = require("./teams");
var FrontAppClient = /** @class */ (function () {
    function FrontAppClient(token, apiUrl) {
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
        this.groups = new groups_1.Groups(this);
        this.teams = new teams_1.Teams(this);
        // Promises are default
        this.promises = true;
    }
    FrontAppClient.prototype.useCallbacks = function () {
        this.promises = false;
        return this;
    };
    FrontAppClient.prototype.promiseProxy = function (f, req) {
        return __awaiter(this, void 0, void 0, function () {
            var res, frontError, hasErrors, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.promises || !f)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, req];
                    case 2:
                        res = _a.sent();
                        frontError = res.body._error;
                        hasErrors = frontError && frontError.status !== 200;
                        if (hasErrors) {
                            throw new error_1.FrontAppError(frontError.message, frontError.title || '', frontError.details || [], frontError.status);
                        }
                        return [2 /*return*/, res.body];
                    case 3:
                        err_1 = _a.sent();
                        // console.log(err);
                        throw err_1;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        req.end(function (_err, res) {
                            // console.log('callback res', res.body);
                            if (res.error && res.body && res.body._error) {
                                var frontError = res.body._error;
                                f(new error_1.FrontAppError(frontError.message, frontError.title || '', frontError.details || [], frontError.status), null);
                            }
                            else {
                                f(null, res.body);
                            }
                        });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FrontAppClient.prototype.put = function (endpoint, data, f) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.promiseProxy(f, this._request.put("" + this.API_URL + endpoint).send(data))];
            });
        });
    };
    FrontAppClient.prototype.post = function (endpoint, data, f) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.promiseProxy(f, this._request.post("" + this.API_URL + endpoint).send(data))];
            });
        });
    };
    FrontAppClient.prototype.postMessageWithAttachment = function (endpoint, data, file, f) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.promiseProxy(f, this._request
                        .post("" + this.API_URL + endpoint)
                        .set('Content-Type', 'multipart/form-data')
                        .field('sender[contact_id]', data.contact_id.toString())
                        .field('sender[handle]', data.handle.toString())
                        .field('body', data.body.toString())
                        .field('to[0]', data.to.toString())
                        .attach('attachments', file.buffer, {
                        filename: file.name.toString(),
                        contentType: file.mimetype.toString(),
                    }))];
            });
        });
    };
    FrontAppClient.prototype.get = function (endpoint, data, f) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.promiseProxy(f, this._request.get("" + this.API_URL + endpoint).query(data))];
            });
        });
    };
    FrontAppClient.prototype.nextPage = function (paginationObject, f) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.promiseProxy(f, this._request.get(paginationObject.next))];
            });
        });
    };
    FrontAppClient.prototype.delete = function (endpoint, data, f) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.promiseProxy(f, this._request.delete("" + this.API_URL + endpoint).query(data))];
            });
        });
    };
    FrontAppClient.prototype.callback = function (f, res) {
        if (!f) {
            return;
        }
        if (f.length >= 2) {
            var frontError = res.body._error;
            var hasErrors = frontError && frontError.status !== 200;
            if (hasErrors) {
                f(new error_1.FrontAppError(frontError.message, frontError.title || '', frontError.details || [], frontError.status), null);
            }
            else {
                f(null, res);
            }
        }
        else {
            f(res);
        }
    };
    FrontAppClient.prototype.defaultResponse = function (data, status, message) {
        if (status === void 0) { status = 200; }
        if (message === void 0) { message = 'Success'; }
        return {
            status: status,
            message: message,
            data: data,
        };
    };
    return FrontAppClient;
}());
exports.FrontAppClient = FrontAppClient;
