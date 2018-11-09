import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap'
import Calculator from '../projects/Calculator'
import WeatherApp from '../projects/WeatherApp'
import QuoteMachine from '../projects/QuoteMachine.js'
class Projects extends Component {
    render() {
        return (
            <div className="bg-top-div">
                <Container>
              
                    <Col /* lg={{size: 10, offset: 1}} */ xs="12">
                        <h2 style={{'margin-bottom': '20px'}}> Projects </h2>
                        <br />
                        <div className="background-box project-border">
                           <p className="lead text-center">
                           <a href="https://decarlo.design">decarlo.design</a><br/></p>
                            {/* <iframe src={`https://decarlo.design`} style={{'width':'100%', 'height': '700px'}}/> */}
                            
                            
                            <img src={`https://i.imgur.com/cp2ZmVW.png`}/>
                                                       
                            <p className="info-text">This is a full site-wide modernization, including mobile design, of the portfolio site of my close friend, Dominic Decarlo. 
                            It utilizes React, GatsbyJS and GraphQL to dynamically create pages querying an easily editable JSON which stores customizable options for each page. 
                            For this reason, a content management system dovetails nicely and is in progress.
                            This project is hosted on AWS S3, using Route53 and Cloudfront for routing.</p>
                                                       

                           
                            
                        </div>

                        <br />
                        <WeatherApp/>
                        <p className= "in-between" >Created with LocationIQ (for geolocation), 
                        Axios & DarkSky API for API calls, and WeatherIcons. API calls rerouted through Amazon API Gateway for CORS passthrough.</p> <br />
                        <br />
                        
                        <div><Calculator /></div>
                        <br />
                        
                        <div><QuoteMachine /></div>
                        <br />
                    </Col>
                </Container>


            </div>
        );
    }
}

export default Projects;
