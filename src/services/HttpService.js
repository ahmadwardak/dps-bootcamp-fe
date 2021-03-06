"use strict";

class HttpService {
    constructor() {

    }

    static apiURL() {
        return "http://localhost:3000";
    }

    static get(url, onSuccess, onError) {
        let header = new Headers();

        fetch(url, {
            method: 'GET',
            headers: header
        })
            .then((resp) => {
                return resp.json();
            })
            .then((resp) => {
                if (resp.error) {
                    onError(resp.error);
                }
                else {
                    onSuccess(resp);
                }
            })
            .catch((e) => {
                onError(e.message);
            });
    }

    static put(url, data, onSuccess, onError) {
        let header = new Headers();

        header.append('Content-Type', 'application/json');

        fetch(url, {
            method: 'PUT',
            headers: header,
            body: JSON.stringify(data)
        })
            .then((resp) => {
                return resp.json();
            })
            .then((resp) => {
                if (resp.error) {
                    onError(resp.error);
                }
                else {
                    onSuccess(resp);
                }
            })
            .catch((e) => {
                onError(e.message);
            });
    }

    static post(url, data, onSuccess, onError) {
        let header = new Headers();

        header.append('Content-Type', 'application/json');

        fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(data)
        })
            .then((resp) => {
                return resp.json();
            })
            .then((resp) => {
                if (resp.error) {
                    onError(resp.error);
                }
                else {
                    onSuccess(resp);
                }
            })
            .catch((e) => {
                onError(e.message);
            });
    }

    static remove(url, data, onSuccess, onError) {
        let header = new Headers();

        header.append('Content-Type', 'application/json');

        fetch(url, {
            method: 'DELETE',
            headers: header,
            body: JSON.stringify(data)
        })
            .then((resp) => {
                return resp.json();
            })
            .then((resp) => {
                if (resp.error) {
                    onError(resp.error);
                }
                else {
                    onSuccess(resp)
                }
            })
            .catch((e) => {
                onError(e.message);
            });
    }
}

export default HttpService;