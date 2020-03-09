import React, { Component } from "react";
import FilesServices from "../../../services/files.services";
import ProfileServices from "../../../services/profile.services";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class CreateDeal extends Component {
  constructor(props) {
    super(props);
    this.ProfileServices = new ProfileServices();
    this.FilesServices = new FilesServices();
    this.state = {
      deal: {
        name: "",
        category: "",
        description: "",
        imageUrl: "",
        author: this.props.loggedInUser._id
      }
    };
  }

  finishAction = () => {
    this.props.closeModal();
  };

  postDeal = () => {
    this.ProfileServices.postDeal(this.state.deal)
      .then(() => this.finishAction())
      .catch(err => console.log(err));
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      deal: {
        ...this.state.deal,
        [name]: value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postDeal();
  };

  handleFileUpload = e => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    this.FilesServices.handleUpload(uploadData)
      .then(response => {
        console.log(
          "Subida de archivo finalizada! La URL de Cloudinray es: ",
          response.secure_url
        );
        this.setState({
          deal: {
            ...this.state.deal,
            imageUrl: response.secure_url
          }
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={this.state.deal.name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={this.state.deal.description}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={this.state.deal.category}
            onChange={this.handleChange}
          />{" "}
        </Form.Group>{" "}
        <Form.Group>
          <Form.Label> Imagen </Form.Label>{" "}
          <Form.Control
            type="file"
            name="imageUrl"
            onChange={this.handleFileUpload}
          />{" "}
        </Form.Group>
        <Button variant="dark" type="submit">
          {" "}
          Crear nuevo chollo!{" "}
        </Button>{" "}
      </Form>
    );
  }
}

export default CreateDeal;
