import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/category`,
            withCredentials: true
        })
    }

    getDealsbyCategory = cat =>this.service.get(`/${cat}`).then(response => response.data)
    
    
    
}