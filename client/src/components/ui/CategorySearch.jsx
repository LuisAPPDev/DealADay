import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AuthServices from "../../services/auth.services";
import { Link } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

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
    this.setState({
      search: value
    });

    this.props.dealFilter(this.state.search);
  };

  handleSubmit = e => {
    e.preventDefault();
    let { id } = e.target;
    this.setState({
      search: id
    });
    console.log(this.state);
    this.props.dealFilter(this.state.search);
  };

  render() {
    return (
      <Navbar expand="lg" variant="dark" className="navbarSearch">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              name="search"
              onChange={this.handleChange}
              value={this.state.search}
              placeholder="Buscar chollo!"
              className="mr-sm-2"
            />
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
                <Dropdown.Item value="asus" onClick={this.handleChange}>
                  Portatiles
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Componentes PC</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Televisores</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CategorySearch;