import React, { Component } from "react";
import { Link } from "react-router-dom";

//Services
import AuthServices from "../../services/auth.services";

//Style components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.services = new AuthServices();
  }

  logout = () => {
    this.services
      .logout()
      .then(response => {
        this.props.setTheUser(false);
      })
      .catch(err => console.log(err));
      // this.props.history.push("/");
  };

  render() {
    const greeting = this.props.loggedInUser ? <>Hola, {this.props.loggedInUser.username}!</> : <>Hola, invitad@</>;

    return this.props.loggedInUser ? (
      <Navbar sticky="top" expand="lg" variant="dark" className="navbarFooter">
        <Navbar.Brand href="/">
          <img alt="" src="../../../icons/2.svg" width="30" height="30" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as="div">
              {" "}
              <Link to="/">Inicio</Link>
            </Nav.Link>
            <Nav.Link as="div">
              {" "}
              <Link to="/profile">Perfil</Link>
            </Nav.Link>
            <Nav.Link onClick={this.logout}>Cerrar sesión</Nav.Link>
            <Nav.Link as="div">{greeting}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    ) : (
      <Navbar sticky="top" expand="lg" variant="dark" className="navbarFooter">
        <Navbar.Brand href="/">
          <img alt="" src="../../../icons/2.svg" width="30" height="30" className="d-inline-block align-top" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as="div">
              {" "}
              <Link to="/">Inicio</Link>
            </Nav.Link>
            <Nav.Link as="div">
              {" "}
              <Link to="/login">Inicio sesión</Link>
            </Nav.Link>
            <Nav.Link as="div">
              {" "}
              <Link to="/signup">Registro</Link>
            </Nav.Link>
            <Nav.Link as="div">{greeting}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
