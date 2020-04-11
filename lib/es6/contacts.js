export class Contacts {
    constructor(client) {
        this.client = client;
    }
    async get(params, f) {
        return this.client.get('/contacts', params, f);
    }
    async list(params, f) {
        return this.client.get('/contacts', params, f);
    }
}
