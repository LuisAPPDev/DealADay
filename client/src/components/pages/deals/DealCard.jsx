
import React from 'react'
import './DealCard.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Image from 'react-bootstrap/Image'
import moment from 'moment'

import { Link } from 'react-router-dom'

const DealCard = ({ name, description, price, imageUrl, _id , likes, created_at }) => {

  return (
    <>
      <CardGroup>
        <Card
          className="cardSpacing"
          border="warning"
          style={{ width: "14rem" }}
        >
          <Card.Img
            variant="top"
            className="imgDeals rounded"
            src={`${imageUrl}`}
          />
          <Card.Body>
            <Card.Title>
              {name.length < 35 ? `${name}` : `${name.substring(0, 35)}...`}
            </Card.Title>

            <Card.Text>{description}</Card.Text>
            <Card.Text>
              <span style={{ color: "orange" }}>{price}€</span>{" "}
              <strike style={{ color: "red" }}>1156€</strike>
            </Card.Text>
            <Button as="div" variant="dark" size="sm">
              <Link to={`/deals/${_id}`}>Detalles</Link>
            </Button>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col>
                {likes && likes.length}
                <Image
                  className="icons"
                  src="../../../../icons/fire.png"
                ></Image>
                4
                <Image
                  className="icons"
                  src="../../../../icons/icicle.png"
                ></Image>
              </Col>
              <Col>
                <Image
                  className="icons"
                  src="../../../../icons/alarm-24px.svg"
                ></Image>
                <small className="text-muted">
                  {moment(created_at)
                    .subtract(6, "days")
                    .calendar()}
                </small>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}

export default DealCard



