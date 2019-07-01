import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import './About.css'
class About extends Component {
    render() {
        return (
<div className=" main bg-top-div text-center">
<Container>
<Row>
 
    <Col xs={{size:10, offset:1}} lg={{size:8, offset:2}} >
        {/* <h2 style={{paddingTop: 100}}> About Me</h2> */}
        <div style={{justifyContent: 'center', alignItems: 'center'}}>
        <img className="img-responsive img profile-img" src="/vance.jpg" alt="avatar" />
            
            <p className="front-page-intro-p">B.S. Chem. Eng. '18  turned software engineer, currently living in Seattle, WA.
            I'm a  <strong> front end </strong> and  <strong> mobile engineer </strong>experienced with <strong> React, React Native, Java, Python, C#</strong> and <strong> cloud-based serverless architecture </strong> with AWS.
            </p>
                        <a href="https://www.github.com/vancesereda/" ><i className="fa fa-github front-page-fa" ></i></a>
                        <a href="https://www.linkedin.com/in/vancesereda/" ><i className="fa fa-linkedin front-page-fa" ></i></a>
                        <a href="mailto:vancesereda@gmail.com" ><i className="fa fa-envelope front-page-fa" ></i></a>

            
            {/* <p className="text-center"><i> See my projects</i></p> */}


        </div>
    </Col>
    

    
            
    </Row> 

</Container>
</div>
        );
    }
}

export default About;


{/*I'm a chemical engineer turned software developer.
I enjoy front end development (React) and data engineering (Python, Pandas and Jupyter Lab). </p> */}