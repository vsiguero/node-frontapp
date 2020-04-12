import Utils from './utils';
export class Contacts {
    constructor(client) {
        this.client = client;
    }
    async list(params, query, f) {
        return this.client.get(`/contacts/${Utils.toUrlParam(params)}`, query || {}, f);
    }
    async get(contact_id, f) {
        return this.client.get(`/contacts/${contact_id}`, {}, f);
    }
    async create(params, f) {
        return this.client.post(`/contacts`, params, f);
    }
    async update(contact_id, params, f) {
        return this.client.put(`/contacts/${contact_id}`, params, f);
    }
    async delete(contact_id, f) {
        return this.client.delete(`/contacts/${contact_id}`, {}, f);
    }
    async addHandle(contact_id, params, f) {
        return this.client.post(`/contacts/${contact_id}/handles`, params, f);
    }
    async deleteHandle(contact_id, params, f) {
        return this.client.post(`/contacts/${contact_id}/handles`, params, f);
    }
}
