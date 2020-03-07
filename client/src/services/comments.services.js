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
    // giveLike = deal => this.service.get(`/giveLike/${deal}`).then(response => response.data);
    // giveDislike = deal => this.service.get('/giveDislike').then(response => response.data);
    // editComment = (deal,id) => this.service.post(`/edit/${id}`,deal).then(response=> response.data);
    // deleteComment
    // getTotalLikes = deal => this.service.get(`/getTotalLikes/${deal}`).then(response => response.data);
    
}