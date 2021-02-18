export class Service{
    constructor() {
        this.baseUrl = 'https://rickandmortyapi.com/api/'
    }

    getAllCharacter(page) {
        return fetch(`https://rickandmortyapi.com/api/character/${page}`).then(resp => {
            if (resp.status === 200) {
                return resp.json();
            } else {
                return Promise.reject('is not ok: ' + resp.status)
            }
        })
    }

    getCharacter() {
        return fetch(`https://rickandmortyapi.com/api/character`).then(resp => {
            if (resp.status === 200) {
                return resp.json();
            } else {
                return Promise.reject('is not ok: ' + resp.status)
            }
        })
    }

    getAllLocation(params){
        return fetch(`${this.baseUrl}location?page=${params}`).then(resp => {
            if (resp.status === 200) {
                return resp.json();
            } else {
                return Promise.reject('is not ok: ' + resp.status)
            }
        })
    }

    getAllEpisode(page){
        return fetch(`${this.baseUrl}episode/${page}`).then(resp => {
            if (resp.status === 200) {
                return resp.json();
            } else {
                return Promise.reject('is not ok: ' + resp.status)
            }
        })
    }
}

export const service = new Service();
