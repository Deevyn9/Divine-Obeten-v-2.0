import React from "react";
import "./App.css";
import Nav from "./components/nav";
import AnimatedRoutes from "./components/AnimatedRoutes";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;