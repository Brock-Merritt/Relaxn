import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";



import Header from "./Components/Header/index.js";
import Home from "./Components/Home/index.js";
import Footer from "./Components/Footer/index.js";
import Signup from "./Pages/Signup.js";
import Login from "./Pages/Login.js";
import Profile from "./Pages/Profile.js";
import Happy from "./Pages/Happy";
import Sad from "./Pages/Sad";
import Angry from "./Pages/Angry";
import Stressed from "./Pages/Stressed";
import Tired from "./Pages/Tired";


import './App.css'


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
              <Route exact path="/Happy" component={Happy} />
              <Route exact path="/Sad" component={Sad} />
              <Route exact path="/Angry" component={Angry} />
              <Route exact path="/Stressed" component={Stressed} />
              <Route exact path="/Tired" component={Tired} />
            </Switch>
          </div>
          
        </>
        <Footer />
        
        
      </Router>
    </ApolloProvider>
  );
}

export default App;
