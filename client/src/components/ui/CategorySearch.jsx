import React, { Component } from "react";
import { Link } from "react-router-dom";

//Style Componentes
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Statistic,List,Image } from "semantic-ui-react";

class CategorySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    let { value } = e.target;
    this.setState(
      {
        search: value
      },
      () => this.props.dealFilter(this.state.search)
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    let { id } = e.target.dataset;
    this.setState(
      {
        search: id
      },
      () => this.props.dealFilter(this.state.search)
    );
  };

  render() {
    return (
      <Navbar expand="lg" variant="dark" className="navbarSearch">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="between">
          <Form inline>
            <FormControl type="text" name="search" onChange={this.handleChange} value={this.state.search} placeholder="Buscar chollo!" className="mr-sm-2" />
            <Button variant="outline-info" onClick={this.handleSubmit}>
              Search
            </Button>
          </Form>
          <Nav className="ml-center">
            <Dropdown style={{ margin: "0px 10px" }}>
              <Dropdown.Toggle className variant="info" id="dropdown-basic">
                Categorias
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <Dropdown.Item ><Link to={`/category/Portátiles`}></Link>Portátiles</Dropdown.Item>
                <Dropdown.Item ><Link to={`/category/Televisores`}></Link>Televisores</Dropdown.Item>
                <Dropdown.Item ><Link to={`/category/Tarjetas Gráficas`}></Link>Tarjetas Gráficas</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav className="justify-content-end" style={{fontSize : "10px"}}>
          
          <Statistic.Group size="tiny" color="blue">
          <Statistic>
            <Statistic.Value >{this.props.dealsNumber}</Statistic.Value>
            <Statistic.Label>Chollos</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Usuarios</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        </Nav>
        <Nav>
        <List horizontal>
    <List.Item>
      <Image avatar src='https://res.cloudinary.com/dpercx1rl/image/upload/v1583929813/deals/1%20%281%29.png.png' />
      <List.Content>
        <List.Header>Luis</List.Header>
        Top Contributor
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      <List.Content>
        <List.Header>Juan</List.Header>
        Top Writter
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <List.Content>
        <List.Header>David</List.Header>
        Top Rated User
      </List.Content>
    </List.Item>
  </List>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CategorySearch;
