import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/comments`,
            withCredentials: true
        })
    }

    getAllComments = dealID => this.service.post(`/getAllComments/${dealID}`).then(response => response.data)
    createComment = input => this.service.post(`/create-comment`,input).then(response => response.data)
    deleteComment = comment => this.service.post(`/delete-comment`,comment).then(response => response.data)
    
    
}