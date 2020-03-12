import React, { Component } from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import AuthServices from "../../services/auth.services";
import { Button, Checkbox, Form, Header } from "semantic-ui-react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.services = new AuthServices();
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  postUser = () => {
    this.services
      .signup(this.state)
      .then(theLoggedNewUser => {
        this.setState({ username: "", password: "", email: "" });
        this.props.setTheUser(theLoggedNewUser);
      })
      .catch(err => console.log({ err }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postUser();
  };

  render() {
    return (
      <Container>
        <Header textAlign="center" size="huge">
          Registrarse
        </Header>

        <Form onSubmit={this.handleSubmit}>
          <Form.Field required>
            <label>Nombre de Usuario:</label>
            <input
              placeholder="Nombre de usuario"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Contraseña</label>
            <input
              placeholder="Contraseña"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Email</label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Checkbox inline label="Acepto los terminos y condiciones" required />

          <Button type="submit">Registrarme</Button>
        </Form>

        {/* <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>

                    <Button variant="dark" type="submit">Registrarse</Button>
                </Form> */}
      </Container>
    );
  }
}

export default Signup;
