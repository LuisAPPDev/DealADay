import React from "react";
import "./DealCard.css";
import { Link } from "react-router-dom";

//Time library

import moment from "moment";

//Design components
import clock from "../../../images/alarm-24px.svg";
import { Label } from "semantic-ui-react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

const DealCard = ({ name, description, price, imageUrl, _id, likes, created_at, author }) => {
  function showDescription(description) {
    if (description) {
      if (description < 35) {
        return description;
      } else return description.substring(0, 74);
    } else return "";
  }

  
  return (
    <>
      <CardGroup>
        <Card className="cardSpacing" border="warning" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="imgDeals rounded" src={`${imageUrl}`} />
          <Card.Body>
            <Card.Title>{name.length < 35 ? `${name}` : `${name.substring(0, 35)}...`}</Card.Title>

            <Card.Text>
              {/* {showDescription(description)} */}
              {/* {(description && description.length < 35) ? `${description}` : `${description.substring(0, 35)}...`} */}
            </Card.Text>
            <Card.Text>
              <span style={{ color: "orange" }}>{price}€</span> <strike style={{ color: "red" }}>{(price *1.15).toFixed(2)}€</strike>
            </Card.Text>
            <Button as="div" variant="light" size="sm">
              <Link to={`/deals/${_id}`}>Detalles</Link>
            </Button>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col>
                <Label as="a" image>
                  <img src={author.avatar} />
                  {author.username}
                </Label>
              </Col>
              <Col>
                <Image className="icons" src={clock}></Image>
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
};

export default DealCard;
