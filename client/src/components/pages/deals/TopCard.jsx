import React from "react";
import { Link } from "react-router-dom";
import "./DealCard.css";

//Design components
import { Button,Rating } from "semantic-ui-react";

const TopCard = ({ name, price, imageUrl, _id}) => {
  
  
  return (
    <>
    <div class="item">
    <div class="image"><img src={imageUrl} /></div>
    <div class="content">
      <div class="header">{name}</div>
      <div class="meta"><Rating icon='star' defaultRating={3} maxRating={4} /></div>
      <span style={{color:"orange"}}>{price}€</span><br></br>
      <Button as="a" link content="Ver" size="tiny">
        <Link to={`/deals/${_id}`}>Ver</Link>
      </Button>
    </div>
  </div>
  </>
  );
};

export default TopCard;
