import React, { Component } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import Container from "react-bootstrap/Container";
import AuthServices from "../../services/auth.services";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.services = new AuthServices();
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  postUser = () => {
    this.services
      .login(this.state)
      .then(theLoggedUser => {
        this.setState({ username: "", password: "" });
        this.props.setTheUser(theLoggedUser);
        this.props.history.push("/");
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
        <h1>Inicio de sesión</h1>
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Usuario"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Usuario"
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Contraseña"
                  placeholder="Contraseña"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <Button type="submit" content="Login" primary />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Button as="a" href="/signup" link content="Registrarse" icon="signup" size="big" />
            </Grid.Column>
          </Grid>

          <Divider vertical>O</Divider>
        </Segment>
      </Container>
    );
  }
}

export default Login;
