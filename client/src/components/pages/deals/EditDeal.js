import React, { Component } from 'react'
import FilesServices from '../../../services/files.services'
import DealServices from '../../../services/deal.services'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class EditDeal extends Component {

    constructor(props) {
        super(props)
        this.DealServices = new DealServices()
        this.FilesServices = new FilesServices()
        this.state = {
            deal: {
                name: this.props.deal.name,
                category: this.props.deal.category,
                description: this.props.deal.description,
                imageUrl : this.props.deal.imageUrl,
                
                                        
        }
    }

}

    finishAction = (theUpdateDeal) => {
        this.props.update();
        this.props.closeModal()
         
    }

    editDeal = () => {

        this.DealServices.editDeal(this.state.deal,this.props.match.params.id)
            .then((theUpdateDeal) =>{ this.finishAction(theUpdateDeal)})
            .catch(err => console.log(err))
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            deal: { ...this.state.deal, [name]: value }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.editDeal()
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imageUrl", e.target.files[0])
        this.FilesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.secure_url)
                this.setState({
                    deal: { ...this.state.deal, imageUrl: response.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.deal.name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.deal.description} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" name="category" value={this.state.deal.category} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" name="image" value={this.state.deal.imageUrl} onChange={this.handleChange} />
                    <Form.Control type="file" name="imageUrl" onChange={this.handleFileUpload} />
                </Form.Group>

                <Button variant="dark" type="submit">Editar</Button>
            </Form>
        )
    }
}

export default EditDeal