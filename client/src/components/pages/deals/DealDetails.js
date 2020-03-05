import React, { Component } from 'react'
import DealServices from '../../../services/deal.services'
import './DealDetails.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'

class DealDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { deal: {} }
        this.services = new DealServices()
    }

     componentDidMount = () => this.getOneDeal()
     

    getOneDeal = () => {
        this.services.getDealDetails(this.props.match.params.id)
            .then(theDeal => this.setState({ deal: theDeal }))
            .catch(err => console.log(err))
    }

    giveLike = () => {

        this.services.giveLike(this.props.match.params.id)
        .then(() => this.getOneDeal())

    }

    giveDislike = () => {


    }

    render() {

        return (
            <Container className="dealDescription">
                <h1>{this.state.deal.name}</h1>
                <Image className="icons" src="../../../../icons/alarm-24px.svg"></Image>
                <small className="text-muted">3 mins ago</small>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                    <br></br>
                        <h3>Info:</h3>
                        <hr></hr>
                        <p>Descripción: {this.state.deal.description}</p>
                        <p>Likes: {this.state.deal.likes&&this.state.deal.likes.length}</p>
                        <p>Dislikes:  </p>
                        <Button as="div" variant="outline-warning" className="buttonBack" onClick={this.giveLike} size="sm">DAR LIKE</Button>
                        
                    </Col>
                    <Col md={{ span: 5, offset: 1 }}>
                        <img className="rounded dealDescriptionImg" src={this.state.deal.imageUrl} alt={this.state.deal.title}></img>
                    </Col>
                </Row>
               
                <Button as="div" variant="outline-warning" className="buttonBack" size="sm">
                    <Link to="/">Volver</Link>
                </Button>
            </Container>
        )
    }
}

export default DealDetails