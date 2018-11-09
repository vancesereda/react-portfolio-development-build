import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'





class App extends Component {
  render() {
    return (
      <Router>
        <div className="bg">
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <p className="contact">
           <br />Vance Sereda © {new Date().getFullYear()}<br />Built with React and Reactstrap</p>
        </div>

      </Router>
    );
  }
}

export default App;
