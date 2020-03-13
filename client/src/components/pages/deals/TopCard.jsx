import React from "react";
import "./DealCard.css";
import { Link } from "react-router-dom";

//Time library

import moment from "moment";

//Design components
import { Label,Icon, Button,Rating } from "semantic-ui-react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

const TopCard = ({ name, price, imageUrl, _id, likes,externalUrl }) => {
  
  
  return (
    <>
    
    
  <div class="item">
    <div class="image"><img src={imageUrl} /></div>
    <div class="content">
      <div class="header">{name}</div>
      <div class="meta"><Rating icon='star' defaultRating={3} maxRating={4} /></div>
      <div class="description">Estrellas</div> 
      <span style={{color:"orange"}}>{price}€</span><br></br>
      <Button size='mini' as="a" href={externalUrl} target="_blank" basic color="blue" animated>
                    <Button.Content visible>Ver</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
      
    </div>
  </div>
  

    </>
  );
};

export default TopCard;
