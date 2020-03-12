import React, { Component } from "react";

/* --- Styling sheets --- */
import { Switch, Route, Redirect } from "react-router-dom";

/* --- Styling sheets --- */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* --- Styling sheets --- */
import NavBar from "./components/ui/NavBar";

/* --- Styling sheets --- */
import AuthServices from "./services/auth.services";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";

/* ---  --- */
import Profile from "./components/pages/profile/profile";
import DealsList from "./components/pages/deals/DealList";
import DealDetails from "./components/pages/deals/DealDetails";
import Footer from "./components/ui/Footer";

class App extends Component {
  constructor() {
    super();

    this.state = { loggedInUser: false };
    this.services = new AuthServices();
  }

  //componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state)
  componentDidMount = () => this.fetchUser();

  setTheUser = userObj => this.setState({ loggedInUser: userObj });

  fetchUser = () => {
    this.services
      .loggedin()
      .then(theUser => this.setState({ loggedInUser: theUser }))
      .catch(() => this.setState({ loggedInUser: false }));
  };

  render() {
    return (
      <>
        <NavBar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />

        <Switch>
          <Route exact path="/" render={() => <DealsList loggedInUser={this.state.loggedInUser} />} />
          <Route path="/signup" render={() => <Signup setTheUser={this.setTheUser} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route
            path="/profile"
            render={() =>
              this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />
            }
          />
          <Route
            path="/deals/:id"
            render={props => <DealDetails loggedInUser={this.state.loggedInUser} {...props} />}
          />
        </Switch>

        <Footer />
      </>
    );
  }
}

export default App;
