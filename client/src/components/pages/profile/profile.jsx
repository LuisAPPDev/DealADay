import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CreateDeal from "../deals/CreateDeal";
import ProfileServices from "../../../services/profile.services";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DealCard from "../deals/DealCard";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: [],
      searchDeals: "",
      showmodal: false
    };
    this.services = new ProfileServices();
  }

  closeModal = () => this.setState({ showmodal: false });
  openModal = () => this.setState({ showmodal: true });

  getDealsApproved = () => {
    this.state.searchDeals = "Aprobados";
    this.services
      .getDealsApproved()
      .then(DealsApproved => this.setState({ deals: DealsApproved }))
      .catch(err => console.log(err));
  };

  getDealsPending = () => {
    this.state.searchDeals = "Pendientes";
    this.services
      .getDealsPending()
      .then(DealsPending => this.setState({ deals: DealsPending }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Container>
          <div className="row align-items-center">
            <h4>Bienvenido {this.props.loggedInUser.username}</h4>
          </div>

          <Row>
            <br></br>
            <div class="col-md-5">
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
                  <span className="badge badge-primary badge-pill">
                    {this.state.deals.length}
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {this.props.loggedInUser && (
                    <Link to="#" onClick={this.getDealsPending}>
                      Ver chollos pendientes de aprobacion
                    </Link>
                  )}

                  <span className="badge badge-primary badge-pill">1</span>
                </li>
              </ul>
            </div>
          </Row>
          <div className="row">
            {this.state.searchDeals}
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
            <CreateDeal
              loggedInUser={this.props.loggedInUser}
              closeModal={this.closeModal}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default Profile;
