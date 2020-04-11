export class Analytics {
    constructor(client) {
        this.client = client;
    }
    async get(params, f) {
        return this.client.get('/analytics', params, f);
    }
    async list(params, f) {
        return this.client.get('/analytics', params, f);
    }
}
