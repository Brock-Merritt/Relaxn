import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";


import Header from "./components/Header/index.js";
import Home from "./components/Home/index.js";
import Footer from './components/Footer/index.js';
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Profile from "./pages/Profile.js";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
            </Switch>
          </div>
          
        </>
        <Footer />
        
        
      </Router>
    </ApolloProvider>
  );
}

export default App;
