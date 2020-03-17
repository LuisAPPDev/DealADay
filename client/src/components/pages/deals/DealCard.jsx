import React, { Component } from "react";
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

class DealCard extends Component{
  constructor(props){
  super(props)
}
  

componentDidUpdate(){
  console.log('lol')
}

  // function showDescription(description) {
  //   if (description) {
  //     if (description < 35) {
  //       return description;
  //     } else return description.substring(0, 74);
  //   } else return "";
  // }

  render(){

  return (
    <>
      <CardGroup>
        <Card className="cardSpacing" border="warning" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="imgDeals rounded" src={`${this.props.imageUrl}`} />
          <Card.Body>
            <Card.Title>{this.props.name.length < 35 ? `${this.props.name}` : `${this.props.name.substring(0, 35)}...`}</Card.Title>

            <Card.Text>
            </Card.Text>
            <Card.Text>
              <span style={{ color: "orange" }}>{this.props.price}€</span> <strike style={{ color: "red" }}>{(this.props.price *1.15).toFixed(2)}€</strike>
            </Card.Text>
            <Button as="div" variant="light" size="sm">
              <Link to={`/deals/${this.props._id}`}>Detalles</Link>
            </Button>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col>
                <Label as="a" image>
                  <img src={this.props.author.avatar} alt={this.props.name} />
                  {this.props.author.username}
                </Label>
              </Col>
              <Col>
                <Image className="icons" src={clock}></Image>
                <small className="text-muted">
                  {moment(this.props.created_at)
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
}
export default DealCard;
