import React, { Component } from "react";

//Services
import DealServices from "../../../services/deal.services";
import DealCard from "./DealCard";

//Components
import CategorySearch from "../../ui/CategorySearch";

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
    this.services = new DealServices();
  }

  componentDidMount = () => this.getAllDeals();

  getAllDeals = () => {
    this.services
      .getAllDeals()
      .then(allDeals => this.setState({ deals: allDeals }))
      .catch(err => console.log(err));
  };

  getFilterDeals = input => {
    this.services
      .getFilterDeals(input)
      .then(FilterDeals => this.setState({ deals: FilterDeals }))
      .catch(err => console.log(err));
      console.log(input)
  };

  render() {
    return (
      <Container style={{ textAlign: "center" }}>

<Statistic.Group>
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Faves</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>31,200</Statistic.Value>
            <Statistic.Label>Views</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Members</Statistic.Label>
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
