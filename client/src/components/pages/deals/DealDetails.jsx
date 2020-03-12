import React, { Component } from "react";
import { Link } from "react-router-dom";

//Services
import DealServices from "../../../services/deal.services";
import CommentServices from "../../../services/comments.services";

//Stylesheets
import "./DealDetails.css";

//Components

import EditDeal from "./EditDeal";
import WriteComments from "./WriteComments";
import ShowComments from "./ShowComments";

//Time library

import moment from "moment";

//Design Components

// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { Header, Breadcrumb, Button, Icon, Label } from "semantic-ui-react";

class DealDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { deal: {}, comments: [], showmodal: false };
    this.DealServices = new DealServices();
    this.CommentServices = new CommentServices();
  }
  closeModal = () => this.setState({ showmodal: false });
  openModal = () => this.setState({ showmodal: true });

  componentDidMount = () => {
    this.getOneDeal();
    this.getAllComments();
  };

  getOneDeal = () => {
    console.log(this.state.deal)
    this.DealServices
      .getDealDetails(this.props.match.params.id)
      .then(theDeal => this.setState({ deal: theDeal }))
      .catch(err => console.log(err));
      
  };

  getAllComments = () => {
    
    this.CommentServices.getAllComments(this.props.match.params.id)
      .then(AllComments => this.setState({ comments: AllComments }))
      .catch(err => console.log(err));
      
  };

  giveLike = () => {
    
    this.DealServices.giveLike(this.props.match.params.id).then(() => this.getOneDeal());
    // this.getOneDeal()
  };


  render() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Section as="a" href="/" link>
            Home
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>{this.state.deal.category}</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>{this.state.deal.name}</Breadcrumb.Section>
        </Breadcrumb>
        <Container className="dealDescription">
          <Row>
            <Col md={{ span: 6 }}>
              <Row>
                <Col style={{textAlign:"center" }}>
                  <br></br>
                  <br></br>
                  <Button as="div" labelPosition="right">
                    <Button onClick={this.giveLike} color="red">
                      <Icon name="heart" />
                      Like
                    </Button>
                    <Label as="a" basic color="red" pointing="left">
                      {this.state.deal.likes && this.state.deal.likes.length}
                    </Label>
                  </Button>
                  <Image className="icons" src="../../../../icons/alarm-24px.svg"></Image>
                  <small className="text-muted">3 mins ago</small>
                  <h4>{this.state.deal.name}</h4>
                  <span style={{ color: "orange" }}>{this.state.deal.price}€</span>{" "}
                  <strike style={{ color: "red" }}>1156€</strike>
                  <br></br>
                  <br></br>
                  <Button as="a" href={this.state.deal.externalUrl}  target="_blank" basic color="blue" animated>
                    <Button.Content visible>Llevame al chollo</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </Col>
                <Col>
                  <img
                    className="rounded dealDescriptionImg"
                    src={this.state.deal.imageUrl}
                    alt={this.state.deal.title}
                  ></img>
                  <Header textAlign="center" size="medium">
                    Compártelo en las redes
                  </Header>
                  <div style={{ textAlign: "center" }}>
                    <Button circular color="facebook" icon="facebook" />
                    <Button circular color="twitter" icon="twitter" />
                    <Button circular color="youtube" icon="youtube" />
                    <Button circular color="instagram" icon="instagram" />
                  </div>
                </Col>
              </Row>

              <Header as="h3" dividing>
                Descripción
              </Header>
              <p>{this.state.deal.description}</p>
              <Header as="h3" dividing>
                Comentarios
              </Header>
              {this.state.comments.map(elm => (
                <ShowComments update={this.getAllComments} key={elm._id} {...elm} />
              ))}
              <WriteComments update={this.getAllComments} {...this.props} user={this.props.loggedInUser}></WriteComments>
            </Col>
            <Col md={{ span: 5, offset: 1 }}>
              <br></br>
              <Button as="div" variant="outline-warning" className="buttonBack" size="sm">
                <Link to="/">Volver</Link>
              </Button>
              {this.props.loggedInUser.role === "admin" ? (
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Admin Options
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                     
                        <Link to="#" onClick={this.openModal}>
                          Editar
                        </Link>
                     
                      <br></br>
                      
                        <Link to="#" onClick="">
                          Cambiar estado publicación
                        </Link>
                     
                      <br></br>
                     
                        <Link to="#" onClick="">
                          Eliminar
                        </Link>
                      
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              ) : null}
            </Col>
          </Row>
        </Container>

        <Modal show={this.state.showmodal} onHide={this.closeModal}>
          <Modal.Body>
            <h3>Editar chollo</h3>
            <hr></hr>
            <EditDeal
              {...this.props}
              deal={this.state.deal}
              update={this.getOneDeal}
              loggedInUser={this.props.loggedInUser}
              closeModal={this.closeModal}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default DealDetails;
