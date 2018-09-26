import React, { Component } from 'react';
import { Col, Container, Row, Input, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap'
import './WeatherApp.css'
import './../Projects.css'
import axios from 'axios-jsonp-pro'
import WeatherIcon from 'react-icons-weather'
let cities = require('./cities.json')




class WeatherApp extends Component {
    constructor(props) {
        super(props);
        this.state= {
          geo: '',
          weather: '',
          metric: false,
          day: 0,
          value: '',
          clear: false,
          dropdownOpen: false
        },
        this.API_KEY = '349ebcb75e6527'
      
      }
    componentDidMount() {

      //Get geolocation and call API for location key
      const getUserLocation = () => {
          return new Promise(function(resolve, reject) {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(resolve, error, options);
              } else {
                reject("Geolocation is not supported by this browser")
              }
          });
        }
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      } 
      const showPosition = async (position) => {

        const { latitude, longitude } = position.coords;
        // const url = `/currentconditions/v1/${LocationData.Key}`
        const weather =  await axios.get(`https://mym62feki7.execute-api.us-east-1.amazonaws.com/stage-1/${latitude},${longitude}`).then(res => res.data);
        console.log(weather.daily.data);
        console.log(weather)
        const geo = await axios.get(`https://us1.locationiq.com/v1/reverse.php`,
        {
          params: {
            key: this.API_KEY,
            lat: latitude,
            lon: longitude,
            format:'json'
          }
        }).then(res=>{
           console.log(res.data);

           return res.data;
         })

         


         

         this.setState({ geo, weather })
      }

      getUserLocation()
        .then(showPosition)
        .catch(function(err) {
          console.log(err);
        });
      
      const { geo, weather } = this.state;

    }

    handleTemperatureChange = () => {
      const { weather, day, metric } = this.state
      
      if (weather.daily) {
          if  (metric === false) {
          this.setState({metric:true})
          } else { 
            this.setState({metric:false})
        }
      }
    }

    handleDay = (i) => {
      this.setState({day: i})

    }

   
    handleKeyPress = (event) => {
      var code = event.keyCode || event.which;
      if(code === 13) { //13 is the enter keycode
        this.setState({clear: false})
        console.log(event.target.value)
        this.handleLocationChange(event.target.value)
        // this.handleLocationChange(event.target)
          //Do stuff in here
      } 
    }
    handleLocationChange = async (searchString) => {
      


      const location = await axios.get(`https://us1.locationiq.com/v1/search.php`, 
        {
          params: {
            key: this.API_KEY,
            q: searchString,
            format:'json'
          }}).then(res => res.data)
      console.log(location)
      const { lat, lon } = location[0]
      const weather = await axios.get(`https://mym62feki7.execute-api.us-east-1.amazonaws.com/stage-1/${lat}, ${lon}`)
      .then(res=> {
        console.log(res.data)
        return res.data
      })
        
      

      this.setState({weather})
    }

    checkandToggleDropDown = () => {
      const { value, dropdownOpen } = this.state;
      if (value.length > 5 && dropdownOpen == false) {
        this.setState({dropdownOpen: true})
      } else if (value.length < 5) {
        this.setState({dropdownOpen: false})
      }
    }

    handleChange = (event) => {




      const {value} = event.target;
      this.setState({value:event.target.value})
      this.checkandToggleDropDown();
      




    }

    

    render() {
      const days = ["Sunday", "Monday", "Tuesday", 
                "Wednesday", "Thursday", "Friday", 
                 "Saturday"];
      const today = new Date().getDay();
      const daysRestructured = days.slice(today,days.length).concat(days.slice(0,today))
      // console.log(daysRestructured)

      const { geo, weather, day, metric, value} = this.state || "";
      const { city, state } = geo.address || "";
      const { data } = weather.daily || "";
      // console.log(city)
      const cityStateDefault =  data ? `${city}, ${state.substr(0,2).toUpperCase()}` : null;






        return (
        
<div className="project-border app-background">
   {data ?  
    <Container fluid >
        <Row className="row-1">
            <Col xs="9" lg="4" className="left-side">
             
              <Dropdown isOpen={this.state.dropdownOpen}>
                <DropdownToggle
                                tag="span"
                               
                                data-toggle="dropdown"
                                aria-expanded={this.state.dropdownOpen}>
                
                    <Input placeholder={this.state.clear ? null : cityStateDefault} 
                      className="transparent-input"
                      onClick={()=>this.setState({clear:true})}
                      onKeyPress={this.handleKeyPress}
                      onChange={this.handleChange}
                      value={value}/>



                </DropdownToggle>
                <DropdownMenu>
                  <div >Custom dropdown item</div>
                  <div >Custom dropdown item</div>
                  <div >Custom dropdown item</div>
                  <div >Custom dropdown item</div>
                </DropdownMenu>
              </Dropdown>
              <h3 style={{'font-size':'10px', 'padding-bottom':'10px'}}>or type location + ↵</h3>
              <h3>{daysRestructured[day]}</h3>
              <h3>{/*day===0 ? weather.minutely.summary :*/data[day].summary}</h3>
            
            
            
        
            </Col>
            <Col xs="6" md="4" className="text-center  padding-0">
              
                <WeatherIcon name="darksky" 
                
                  iconId={day === 0 ? weather.minutely.icon : data[day].icon} 
                  flip="horizontal"
                  rotate="90"
                  className="main-weather-icon"/>

 
                <p className="main-weather-text">{metric 
                  ? 
                  Math.round((data[day].apparentTemperatureHigh-32)*5/9) :
                  Math.round(data[day].apparentTemperatureHigh) }<sup onClick={this.handleTemperatureChange} style={{'cursor':'pointer'}}>°F |°C</sup></p> 
            
            
            
            
            </Col>
            <Col xs="6" md="4" className="right-side padding-0">
            <h3>Precipitation: {`${Math.round(data[day].precipProbability*100)}%`}<br/>
            Humidity: {`${Math.round(data[day].humidity*100)}%`} <br />
            Wind: {`${Math.round(data[day].windSpeed)} mph`}<br /> </h3>
            
            
            
            
            </Col>
            
        </Row>

        <hr className="my-2" />

        <Row className="overflow">

          {data.slice(0,7).map((item, i) => {
           /* console.log(data.slice(0,6))*/
            return (
                <Col onClick={()=>this.handleDay(i)} className={`scroll-grid text-center padding-5`} style={i===day?{'box-sizing': 'content-box', 'background':'#fdfbfb', 'border':'solid #dfdfdf 1px'} : null} key={i}>
                  <p>{daysRestructured[i].substr(0,3)}<span class="lg-view">{daysRestructured[i].substr(3,daysRestructured[i].length)}</span></p>
                  <WeatherIcon name="darksky" 
                    className="weather-icon"
                    key={i} 
                    iconId={i===0 ? weather.minutely.icon : data[i].icon} 
                    flip="horizontal"
                    rotate="90"/>
                <p>{Math.round(data[i].apparentTemperatureHigh)} | {Math.round(data[i].apparentTemperatureLow)}</p>
                </Col>
                
            )

          })}
          {/*<Col xs={2}></Col>*/}

        
        
        
        </Row>
    
    
    
  
    </Container> : <h2 style={{'color': '#d9d9d9'}}>Loading...</h2>}


</div>
        );
    }
}

export default WeatherApp;