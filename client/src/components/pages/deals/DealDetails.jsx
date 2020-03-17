import React, { Component } from "react";
import { Link } from "react-router-dom";

//Services
import DealServices from "../../../services/deal.services";
import CommentServices from "../../../services/comments.services";


//Stylesheets
import "./DealDetails.css";

//Components
import TopCard from "./TopCard"
import EditDeal from "./EditDeal";
import WriteComments from "./WriteComments";
import ShowComments from "./ShowComments";

//Design Components

import clock from "../../../images/alarm-24px.svg";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { Header, Breadcrumb, Button, Icon, Label, Confirm, Embed } from "semantic-ui-react";


class DealDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { deal: {}, similarDeals : [], comments: [], showmodal: false,  open: false  };
    this.DealServices = new DealServices();
    this.CommentServices = new CommentServices();
  }
  closeModal = () => this.setState({ showmodal: false });
  openModal = () => this.setState({ showmodal: true });

  show = () => this.setState({ open: true })
  
  handleConfirm = () => {
    this.DealServices.deleteDeal(this.props.match.params.id)
    .then(()=>{
      this.setState({ open: false })
      this.props.history.push('/')}) 
  }

  handleCancel = () => this.setState({ open: false })

  componentDidMount = () => {
    this.getOneDeal()
    this.getAllComments();
    this.getSimilarDeals();
  };

  getOneDeal = () => {
    
    this.DealServices.getDealDetails(this.props.match.params.id)
      .then(theDeal =>{

       this.setState({ deal: theDeal })
        this.getSimilarDeals();
      })
      .catch(err => console.log(err));
  };

  getAllComments = () => {
    this.CommentServices.getAllComments(this.props.match.params.id)
      .then(AllComments => this.setState({ comments: AllComments }))
      .catch(err => console.log(err));
  };

  getSimilarDeals = () => {
    
     this.DealServices.getSimilarDeals(this.state.deal.category)
    .then(similarDeals =>{

    for(let i=0;i<similarDeals.length;i++){

      if (similarDeals[i]._id === this.props.match.params.id){
        similarDeals.splice(i,1)
      }
      
    }

      if(similarDeals.length>4){
        similarDeals.splice(4,similarDeals.length)
      }    
      //RECORTAR ARRAY
     this.setState({similarDeals}) })
    .catch(err => console.log(err))
    
  }

  giveLike = () => {
    this.DealServices.giveLike(this.props.match.params.id).then(() => this.getOneDeal())}

  changeDealStatus = () => {
    let status = "";
    
    this.state.deal.status === "pending" ? status = "active" : status = "pending"
    this.DealServices.changeDealStatus(this.props.match.params.id,status).then(() =>this.getOneDeal)
    
  }

  render() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Section>
          <Link to={`/`}>Home </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section>
            <Link to={`/category/${this.state.deal.category}`}>
            {this.state.deal.category}{" "}

            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>{this.state.deal.name}</Breadcrumb.Section>
        </Breadcrumb>
        <Container className="dealDescription">
          <Row>
            <Col md={{ span: 6 }}>
              <Row>
                <Col style={{ textAlign: "center" }}>
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
                  <Image className="icons" src={clock}></Image>
                  <small className="text-muted">3 mins ago</small>
                  <h4>{this.state.deal.name}</h4>
                  <span style={{ color: "orange" }}>{this.state.deal.price}€</span> <strike style={{ color: "red" }}>{(this.state.deal.price *1.15).toFixed(2)}€</strike>
                  <br></br>
                  <br></br>
                  <Button as="a" href={this.state.deal.externalUrl} target="_blank" basic color="blue" animated>
                    <Button.Content visible>Llevame al chollo</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </Col>
                <Col>
                  <img className="rounded dealDescriptionImg" src={this.state.deal.imageUrl} alt={this.state.deal.title}></img>
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
                <ShowComments update={this.getAllComments} key={elm._id} {...elm} user={this.props.loggedInUser} />
              ))}

              {(this.props.loggedInUser) ?
              <WriteComments update={this.getAllComments} {...this.props} user={this.props.loggedInUser}></WriteComments>
              :null}
              {this.state.deal.video ? (
                <>
              <Header as="h3" dividing>
              Video Reviews:
              </Header>
              <Embed
              id='eIw5b7VCIuU'
              placeholder="https://i.ytimg.com/vi/eIw5b7VCIuU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC44fuQaNQ5fAr5JSiOyRlv0rpNXA"
              source='youtube'
              /> </>)
              : null}
               
            </Col>
            <Col md={{ span: 5, offset: 1 }}>
              
               <Header as="h3" dividing>
              Quizás te interese
              </Header>
              <div className="ui items">
                {this.state.similarDeals.map(elm => <TopCard key={elm._id} {...elm}/>)}
              </div>
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

                        <Link to="#" onClick={this.changeDealStatus}>
                          Cambiar estado publicación
                        </Link>

                        <br></br>

                        <Link to="#" onClick={this.show}>
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
            <EditDeal {...this.props} deal={this.state.deal} update={this.getOneDeal} loggedInUser={this.props.loggedInUser} closeModal={this.closeModal} />
          </Modal.Body>
        </Modal>

        
        <Confirm className="modalPop"
          open={this.state.open}
          header='Confirmar borrado'
          content='Al pulsar en aceptar, la oferta será eliminada y serás redirigido a la página principal'
          cancelButton='Cancelar'
          confirmButton="Eliminar"
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          size="small"
        />
      </>
    );
  }
}

export default DealDetails;
