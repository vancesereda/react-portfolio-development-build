import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap'
import Calculator from '../projects/Calculator'
import WeatherApp from '../projects/WeatherApp'
import QuoteMachine from '../projects/QuoteMachine.js'
import SimpleSlider from '../components/SimpleSlider.js'
class Projects extends Component {
    render() {
        return (
            <div className="bg-top-div">
                <Container>
              
                    <Col /* lg={{size: 10, offset: 1}} */ xs="12">
                        <h2 style={{'margin-bottom': '20px'}}> Projects </h2>
                        <br />
                        <div className="background-box project-border" id="decarlo">
                           
                           <p className="lead text-center">
                           <a href="https://decarlo.design">decarlo.design - Full Stack Serverless CMS </a></p><br/>
                           
                            
                            
                            {/* <img src={`https://s3.amazonaws.com/www.domdecarlo.com/3.png`}/> */}


                            <SimpleSlider photos={["3","create-page", "edit-page", "log-in", "log-in-active", "page"]} />
                            
                            
                            
                            
                            
                            
                                                       
                            <p className="info-text"> Portfolio site and content management system for Dominic Decarlo, visual graphic designer. The CMS was created with AWS DynamoDB, AWS Cognito, and AWS API Gateway. Features create, edit, update, and delete page dialogs for easy user editing. </p> 
                            <div style={{display: 'flex', justifyContent:'space-around', alignItems: 'center'}}>
                                <div>
                                <a href="https://www.github.com/vancesereda/decarlo-cms-client">
                                <i className="fa fa-lg fa-github" />&nbsp;Front end (React)</a>
                                    
                                </div>
                                <div>
                                <a href="https://www.github.com/vancesereda/decarlo-cms-api">
                                <i className="fa fa-lg fa-github" />
                                    &nbsp;Back end (Serverless, AWS DynamoDB, AWS Cognito)

                                </a>
                                </div>  
                                    
                                    
                            </div>


                           
                            
                        </div>

                        <br />
                        <div className="background-box project-border" id="musicplayer">

                            <p className="lead text-center">
                                React Native Music Player
                                <br />
                            </p>
                           
                            
                            
                                                       
                            <p className="info-text">Music player featuring library and background Youtube streaming features. This app allows you to play from your music library, stream Youtube videos as audio in the background, and download videos (and immediately add them to the library).</p> 
                            <div style={{display: 'flex', justifyContent:'space-around', alignItems: 'center'}}>
                                <div>
                                <a href="https://www.github.com/vancesereda/music-player">
                                <i className="fa fa-lg fa-github" />&nbsp;Front end (React Native)</a>
                                    
                                </div>
                                <div>
                                <a href="https://www.github.com/vancesereda/yt-av-info">
                                <i className="fa fa-lg fa-github" />
                                    &nbsp;Back end (Youtube video info parser hosted on Heroku)

                                </a>
                                </div>  
                                    
                                    
                            </div>

                            
                        </div>
                        <div id="weather">
                            <br />
                            <WeatherApp/>
                            
                            <p className= "in-between" >Created with LocationIQ (for geolocation), 
                            Axios & DarkSky API for API calls, and WeatherIcons. API calls rerouted through Amazon API Gateway for CORS passthrough.</p> <br />
                            <br />
                        </div>
                        
                        <div id="calculator"><Calculator /></div>
                        <br />
                        
                        <div id="quotemachine"><QuoteMachine /></div>
                        <br />
                    </Col>
                </Container>


            </div>
        );
    }
}

export default Projects;
