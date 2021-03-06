import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import './Projects.css'

export default class Links extends Component {

    render(){
        return (
            <div className="main bg-top-div">
                <Container>
                    <h2 style={{'margin-bottom': '20px', 'padding-top': '20px'}}> Links </h2>
                    <Row>
                        <Col xs={10}>
                            <ul>
                            <li style={{listStyleType: 'none'}}>
                                <a href="http://ec2-54-191-77-128.us-west-2.compute.amazonaws.com">
                                    My JupyterHub 
                                </a> - EC2 instance (Ubuntu Server) running
                                <a href="http://tljh.jupyter.org/en/latest/" style={{color: 'blue'}}> The Littlest JupyterHub</a>, 
                                a cloud-based solution for Jupyter Notebooks. I'm using this to easily access interview data structures on my phone or run something on the fly.
                            </li>
                            </ul>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}