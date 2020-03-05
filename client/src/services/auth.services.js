import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:3000/api/auth',
            withCredentials: true
        })
    }

    signup = ({ username, password, email }) => this.service.post('/signup', { username, password, email }).then(response => response.data)
    login = ({ username, password }) => this.service.post('/login', { username, password }).then(response => response.data)
    logout = () => this.service.post('/logout').then(response => response.data)
    loggedin = () => this.service.get('/loggedin').then(response => response.data)
}