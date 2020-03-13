import React, { Component } from "react";
import { Link } from "react-router-dom";

//Services
import ProfileServices from "../../../services/profile.services";
import FilesServices from "../../../services/files.services";

//Time library
import moment from "moment";


//Components
import CreateDeal from "../deals/CreateDeal";
import DealCard from "../deals/DealCard";

//Style components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Header, Icon, Image } from "semantic-ui-react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: [],
      searchDeals: "",
      showmodal: false
    };
    this.ProfServices = new ProfileServices();
    this.FilesServices = new FilesServices();
  }

  closeModal = () => this.setState({ showmodal: false });
  openModal = () => this.setState({ showmodal: true });

  getDealsApproved = () => {
    this.state.searchDeals = "Aprobados";
    this.ProfServices.getDealsApproved()
      .then(DealsApproved => this.setState({ deals: DealsApproved }))
      .catch(err => console.log(err));
  };

  getDealsPending = () => {
    this.state.searchDeals = "Pendientes";
    this.ProfServices.getDealsPending()
      .then(DealsPending => this.setState({ deals: DealsPending }))
      .catch(err => console.log(err));
  };

  handleFileUpload = e => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    this.FilesServices.handleUploadAvatar(uploadData)
      .then(response => {
        console.log("Subida de archivo finalizada! La URL de Cloudinray es: ", response.secure_url);
      })
      .catch(err => console.log(err));
  };
  

  render() {
    return (
      <>
        <Container>
          <Header as="h2" icon textAlign="center">
            {/* <Icon name="users" circular /> */}
            <Image circular name="avatar" src={this.props.loggedInUser.avatar} />
            <Header.Content>Bienvenido {this.props.loggedInUser.username}</Header.Content>
            
            <small>Miembro desde {moment(this.props.loggedInUser.created_at).format("L")}</small>
          </Header>

          <Row>
            <br></br>
            <div class="col-md-6">
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  {this.props.loggedInUser && (
                    <Link to="#" onClick={this.openModal}>
                      Crear nuevo chollo
                    </Link>
                  )}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {this.props.loggedInUser && (
                    <Link to="#" onClick={this.getDealsApproved}>
                      Ver chollos publicados
                    </Link>
                  )}
                  <span className="badge badge-primary badge-pill">{this.state.deals.length}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {this.props.loggedInUser && (
                    <Link to="#" onClick={this.getDealsPending}>
                      Ver chollos pendientes de aprobacion
                    </Link>
                  )}

                  <span className="badge badge-primary badge-pill">1</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <Form.Group>
                    <Form.Label> Cambiar Avatar </Form.Label> <Form.Control type="file" name="imageUrl" onChange={this.handleFileUpload} />{" "}
                  </Form.Group>
                </li>
              </ul>
            </div>
            <div class="col-md-6">Prueba</div>
          </Row>
          <div className="row">
            {this.state.deals.map(elm => (
              <>
                {" "}
                <DealCard key={elm._id} {...elm} />
              </>
            ))}
          </div>
        </Container>
        <Modal show={this.state.showmodal} onHide={this.closeModal}>
          <Modal.Body>
            <h3>Nuevo chollo</h3>
            <hr></hr>
            <CreateDeal loggedInUser={this.props.loggedInUser} closeModal={this.closeModal} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default Profile;
