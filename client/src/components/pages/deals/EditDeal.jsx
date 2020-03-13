import React, { Component } from "react";

//Services
import FilesServices from "../../../services/files.services";
import DealServices from "../../../services/deal.services";

//Design components
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Button } from "semantic-ui-react";

class EditDeal extends Component {
  constructor(props) {
    super(props);
    this.DealServices = new DealServices();
    this.FilesServices = new FilesServices();
    this.state = {
      deal: {
        name: this.props.deal.name,
        category: this.props.deal.category,
        description: this.props.deal.description,
        imageUrl: this.props.deal.imageUrl,
        externalUrl: this.props.deal.externalUrl,
        price: this.props.deal.price
      }
    };
  }

  finishAction = theUpdateDeal => {
    this.props.update();
    this.props.closeModal();
  };

  editDeal = () => {
    this.DealServices.editDeal(this.state.deal, this.props.match.params.id)
      .then(theUpdateDeal => {
        this.finishAction(theUpdateDeal);
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      deal: { ...this.state.deal, [name]: value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.editDeal();
  };

  handleFileUpload = e => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    this.FilesServices.handleUpload(uploadData)
      .then(response => {
        console.log("Subida de archivo finalizada! La URL de Cloudinray es: ", response.secure_url);
        this.setState({
          deal: { ...this.state.deal, imageUrl: response.secure_url }
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="name" value={this.state.deal.name} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows="3"
            type="text"
            name="description"
            value={this.state.deal.description}
            onChange={this.handleChange}
          />
        </Form.Group>
        {/* <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" name="category" value={this.state.deal.category} onChange={this.handleChange} />
        </Form.Group> */}
        <Form.Group>
          <Form.Label>Categoría</Form.Label>
          <Form.Control as="select" name="category" onChange={this.handleChange} value={this.state.deal.category}>
          <option>Elegir...</option>
          <option>Monitores</option>
          <option>Televisores</option>
          <option>Portátiles</option>
          </Form.Control>
          </Form.Group>
        <Form.Group>
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" name="image" value={this.state.deal.imageUrl} onChange={this.handleChange} />
          <Form.Control type="file" name="imageUrl" onChange={this.handleFileUpload} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" name="price" value={this.state.deal.price} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enlace externo</Form.Label>
          <Form.Control type="text" name="externalUrl" value={this.state.deal.externalUrl} onChange={this.handleChange} />
        </Form.Group>
        <Button.Group>
          <Button type="submit" positive>
            Editar
          </Button>
          <Button.Or />
          <Button>Cancelar</Button>
        </Button.Group>
        {/* <Button variant="dark" type="submit">
          Editar
        </Button> */}
      </Form>
    );
  }
}

export default EditDeal;
