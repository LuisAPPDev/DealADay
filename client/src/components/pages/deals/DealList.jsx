import React, { Component } from "react";

//Services
import DealServices from "../../../services/deal.services";
import CategoryService from "../../../services/category.services"
//Components
import CategorySearch from "../../ui/CategorySearch";
import DealCard from "./DealCard";

//Style components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import {Statistic} from 'semantic-ui-react'



class DealsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: []
    };
    this.DealServices = new DealServices();
    this.CategoryService = new CategoryService();
  }

    

  componentDidMount = () => {(this.props.match) ? this.getDealsbyCategory() : this.getAllDeals()};
  // componentDidMount = () => this.getDealsbyCategory();


  getAllDeals = () => {
    
    this.DealServices
      .getAllDeals()
      .then(allDeals => this.setState({ deals: allDeals }))
      .catch(err => console.log(err));
  };

  getFilterDeals = input => {
    this.DealServices
      .getFilterDeals(input)
      .then(FilterDeals => this.setState({ deals: FilterDeals }))
      .catch(err => console.log(err))
  };

  getDealsbyCategory = () => {

    this.CategoryService.getDealsbyCategory(this.props.match.params.id)
    .then(DealsbyCategory => this.setState({deals : DealsbyCategory}))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Container style={{ textAlign: "center" }}>

<Statistic.Group color="blue">
          
          <Statistic>
            <Statistic.Value>{this.state.deals.length}</Statistic.Value>
            <Statistic.Label>Chollos</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Usuarios</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <CategorySearch dealFilter={this.getFilterDeals} />
        {this.state.deals.length ? (
          <Row style={{ justifyContent: "center" }}>
            {this.state.deals.map(elm => (
              <DealCard user={this.props.loggedInUser} key={elm._id} {...elm} />
            ))}
          </Row>
        ) : (
          <Spinner animation="border" variant="warning" />
        )}
      </Container>
    );
  }
}

export default DealsList;
