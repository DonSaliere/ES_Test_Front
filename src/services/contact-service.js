export default class ContactService {
	_apiBase = 'http://localhost:61824/api';

	async getContact() {
		const response = await fetch(this._apiBase);
		if (!response.ok) {
			throw new Error(`Could not fetch` +
				`, received ${response.status}`);
		}

		return await response.json();
	}

	async getChenge(data, url) {
		const response = await fetch(`${this._apiBase}${url}`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(data)
		});
		if (!response.ok) {
			throw new Error('json error');
		}

		return await response.json();
	}

	async getUpdate(contact) {
		return await this.getChenge(contact, '/Update');
	}

	async getDelete(id) {
		return await this.getChenge(id, '/Delete');
	}
}

