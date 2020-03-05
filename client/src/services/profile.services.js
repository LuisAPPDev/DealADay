import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:3000/api/profile',
            withCredentials: true
        })
    }

    postDeal = deal => this.service.post(`/new`, deal).then(response => response.data)
    getDealsApproved = () => this.service.get(`/getDealsApproved`).then(response =>response.data)
    getDealsPending = () => this.service.get(`/getDealsPending`).then(response => response.data)
}