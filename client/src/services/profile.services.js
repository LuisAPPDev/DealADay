import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/profile`,
            withCredentials: true
        })
    }

    postDeal = deal => this.service.post(`/new`, deal).then(response => response.data)
    getDealsApproved = () => this.service.get(`/getDealsApproved`).then(response =>response.data)
    getDealsPending = () => this.service.get(`/getDealsPending`).then(response => response.data)
}