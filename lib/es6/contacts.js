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
    async getByEmail(email, f) {
        return this.client.get(`/contacts/alt:email:${email}`, {}, f);
    }
    async getByPhone(phone, f) {
        return this.client.get(`/contacts/alt:phone:${phone}`, {}, f);
    }
    async create(params, f) {
        return this.client.post(`/contacts`, params, f);
    }
    async update(contact_id, params, f) {
        await this.client.put(`/contacts/${contact_id}`, params, f);
        return this.client.get(`/contacts/${contact_id}`, {}, f);
    }
    async delete(contact_id, f) {
        await this.client.delete(`/contacts/${contact_id}`, {}, f);
        return this.client.defaultResponse({
            id: contact_id,
            deleted: true,
            object: 'contact',
        });
    }
    async addHandle(contact_id, params, f) {
        await this.client.post(`/contacts/${contact_id}/handles`, params, f);
        return this.client.defaultResponse({
            id: contact_id,
            added: true,
            object: 'contact_handle',
            params: params,
        });
    }
    async deleteHandle(contact_id, params, f) {
        await this.client.post(`/contacts/${contact_id}/handles`, params, f);
        return this.client.defaultResponse({
            id: contact_id,
            deleted: true,
            object: 'contact_handle',
            params: params,
        });
    }
}
