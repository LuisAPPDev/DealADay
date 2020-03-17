import React,{Component} from "react";
import { Link } from "react-router-dom";
import "./DealCard.css";

//Design components
import { Rating } from "semantic-ui-react";
// import Button from "react-bootstrap/Button";
class TopCard extends Component {
  constructor(props){
    super(props)

  }

  componentDidUpdate(){
    console.log('lol')
  }

render(){

  // let url = "/deals/" + {_id}

  return (
    <>
    <div className="item">
    <div className="image"><img src={this.props.imageUrl} alt={this.props.name}/></div>
    <div className="content">
    <div className="header">{this.props.name}</div>
     <div className="meta"><Rating icon='star' defaultRating={3} maxRating={4} /></div>
    <span style={{color:"orange"}}>{this.props.price}€</span><br></br>

    <Link to={`/deals/${this.props._id}`}>Detalles</Link>
    {/* <button onClick={() => props.history.push('this.props._id')}>Home</button> */}
    </div>
  </div>
  </>
  );
}
};

export default TopCard;
