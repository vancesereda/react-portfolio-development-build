import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Links from './pages/Links'





class App extends Component {
  render() {
    return (
      <Router>
        <div className="bg">
          <CustomNavbar />
          <Route exact path="/" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Links" component={Links} />
          <p className="contact">
           <br />Vance Sereda © {new Date().getFullYear()}<br />Built with React and Reactstrap</p>
        </div>

      </Router>
    );
  }
}

export default App;
