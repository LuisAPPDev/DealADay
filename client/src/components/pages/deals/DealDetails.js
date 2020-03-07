import React, { Component } from 'react'
import DealServices from '../../../services/deal.services'
import CommentServices from '../../../services/comments.services'
import './DealDetails.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Modal from 'react-bootstrap/Modal'
import EditDeal from './EditDeal'
import WriteComments from './WriteComments'
import ShowComments from './ShowComments'
import moment from 'moment'
class DealDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { deal: {}, comments :[], showmodal : false }
        this.services = new DealServices()
        this.CommentServices = new CommentServices()
        
    }
    closeModal = () => this.setState({ showmodal: false })
    openModal = () => this.setState({ showmodal: true })

     componentDidMount = () => {
         
         this.getOneDeal()
         this.getAllComments()
     }
     

    getOneDeal = () => {
        this.services.getDealDetails(this.props.match.params.id)
            .then(theDeal => this.setState({ deal: theDeal }))
            .catch(err => console.log(err))
    }

    getAllComments = () => {
        
        this.CommentServices.getAllComments(this.props.match.params.id)
        .then(AllComments => this.setState({comments : AllComments}) )
        .catch(err => console.log(err))
        
    }

    giveLike = () => {
        console.log(this.state.comments)
        this.services.giveLike(this.props.match.params.id)
        .then(() => this.getOneDeal())
        

    }

    giveDislike = () => {


    }

    render() {

        return (
            <>
            <Container className="dealDescription">
                <h1>{this.state.deal.name}</h1>
                <Image className="icons" src="../../../../icons/alarm-24px.svg"></Image>
                <small className="text-muted">3 mins ago</small>
                <Image className="icons" src="../../../../icons/fire.png"></Image> 
                 {this.state.deal.likes&&this.state.deal.likes.length}
                 <Image className="icons" src="../../../../icons/icicle.png"></Image> 0

                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                    <br></br>
                        <h3>Info:</h3>
                        <hr></hr>
                        <p>Descripción: {this.state.deal.description}</p>
                        <Button as="div" variant="outline-warning" className="buttonBack" onClick={this.giveLike} size="sm">DAR LIKE</Button>
                        <hr/>
                        <WriteComments  {...this.props} user={this.props.loggedInUser}></WriteComments>
                        {this.state.comments.map(elm => <ShowComments key={elm._id} {...elm} />)}
                        
                    </Col>
                    <Col md={{ span: 5, offset: 1 }}>
                    <img className="rounded dealDescriptionImg" src={this.state.deal.imageUrl} alt={this.state.deal.title}></img>
                    <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Admin Options
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        {this.props.loggedInUser.role === "user" ? <Link to="#" onClick={this.openModal}>Editar</Link>: null }
                        <br></br>
                        {this.props.loggedInUser.role === "user" ? <Link to="#" onClick="">Cambiar estado publicación</Link>: null }
                        <br></br>
                        {this.props.loggedInUser.role === "user" ? <Link to="#" onClick="">Eliminar</Link>: null }
                        </Card.Body>
                        
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                                            
                        
                    </Col>
                </Row>
               
                <Button as="div" variant="outline-warning" className="buttonBack" size="sm">
                    <Link to="/">Volver</Link>
                </Button>
            </Container>

            <Modal show={this.state.showmodal} onHide={this.closeModal}>
                    <Modal.Body>
                        <h3>Editar chollo</h3>
                        <hr></hr>
                        <EditDeal {...this.props} deal={this.state.deal} update={this.getOneDeal} loggedInUser={this.props.loggedInUser} closeModal={this.closeModal}/>
                    </Modal.Body>
                </Modal>
                </>
        )
    }
}

export default DealDetails