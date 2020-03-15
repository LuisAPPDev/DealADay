import React from "react";
import "./DealCard.css";
import { Link } from "react-router-dom";

//Design components
import { Icon, Button,Rating } from "semantic-ui-react";

const TopCard = ({ name, price, imageUrl, _id}) => {
  
  
  return (
    <>
    <div class="item">
    <div class="image"><img src={imageUrl} /></div>
    <div class="content">
      <div class="header">{name}</div>
      <div class="meta"><Rating icon='star' defaultRating={3} maxRating={4} /></div>
      <span style={{color:"orange"}}>{price}€</span><br></br>
      <Button size='mini' as="a" href={`/deals/${_id}`} target="_blank" basic color="blue" animated>
                    <Button.Content visible><Link to={`/deals/${_id}`}></Link>Ver
                    </Button.Content>
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
