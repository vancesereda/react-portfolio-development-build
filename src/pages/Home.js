import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Jumbotron, Row, Button} from 'reactstrap'

class Home extends Component {
    render() {
        return (
<div className="main">
    <div className="bg-top-div main">
        <Container className="text-center">
            <div>
                <Jumbotron className="jum">
                    <h1 className="jumbotron-text display-3 text-center">
                    Front End Web Development</h1>
                    <h2 className="lead jumbotron-text">
                    </h2>
                    <hr className="my-2" />
                    <h2 className="h2 jumbotron-text" style={{'text-align': 'center'}}>
                       Serverless | Express | React | Node.js | Python | React Native
                        <br />
                        <a href="https://www.github.com/vancesereda/" style={{'color':'black'}}><i className="fa fa-github fa-lg icon-padding" ></i></a>
                        <a href="https://www.linkedin.com/in/vancesereda/" style={{'color':'black'}}><i className="fa fa-linkedin fa-lg icon-padding" ></i></a>
                        </h2>
                </Jumbotron>
            </div>
        
        
        
        
        
        {/*<footer style={{'padding':'5vh'}}>Made with React and Reactstrap</footer>*/}
    
        </Container>
    </div>
</div>
        );
    }
}

export default Home;
