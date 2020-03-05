
import React from 'react'
import './DealCard.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Image from 'react-bootstrap/Image'

import { Link } from 'react-router-dom'

const CoasterCard = ({ name, description, imageUrl, _id }) => {
    return (
      <>
<CardGroup>
  <Card border="warning" style={{ width: '18rem' }}>
    <Card.Img variant="top" className= " imgDeals rounded" src={`${imageUrl}`} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      
      <Card.Text>
       {description}
      </Card.Text>
      <Card.Text>
       <span style={{ color: "orange" }}>899.95€</span> <strike style={{ color: "red" }}>1156€</strike>
      </Card.Text>
      <Button as="div" variant="dark" size="sm">
                        <Link to={`/deals/${_id}`}>Detalles</Link>
                    </Button>
    </Card.Body>
    <Card.Footer>
    <Row>
    <Col>
    12<Image className="icons" src="../../../../icons/fire.png"></Image>
    4<Image className="icons" src="../../../../icons/icicle.png"></Image>
                    </Col>
    <Col>  

        <Image className="icons" src="../../../../icons/alarm-24px.svg"></Image>
      <small className="text-muted">3 mins ago</small>
      </Col>               
    
    </Row>   
    
    </Card.Footer>
  </Card>
</CardGroup>
</>
    )
}

export default CoasterCard



