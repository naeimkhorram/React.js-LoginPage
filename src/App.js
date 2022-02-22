import React from "react";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="HomeDiv">    
        <h1 className="homeH1">Welcome to the inventory app</h1>
    </div>
  );
};

export default App;
