import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/files`,
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    handleUpload = theFile => this.service.post('/upload', theFile).then(response => response.data)
    handleUploadAvatar = theFile => this.service.post('/upload/avatar', theFile).then(response => response.data)
    
}