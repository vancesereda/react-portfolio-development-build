import React, { Component } from 'react';
import { Col, Container, Row, Input, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap'
import './WeatherApp.css'
import './../Projects.css'
import axios from 'axios-jsonp-pro'
import WeatherIcon from 'react-icons-weather'
import ManageDropdown from './ManageDropdown'
import Abbreviations from './Abbreviations'



class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geo: '',
      weather: '',
      metric: false,
      day: 0

    },
      this.API_KEY = '349ebcb75e6527'
  }



  componentDidMount() {

    //Get geolocation and call API for location key
    const getUserLocation = () => {
      return new Promise(function (resolve, reject) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(resolve, error, options);
        } else {
          reject("Geolocation is not supported by this browser")
        }
      });
    }
    const options = {
      enableHighAccuracy: true,
      timeout: 100000,
      maximumAge: 0
    };
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    const showPosition = async (position) => {

      const { latitude, longitude } = position.coords;
      // const url = `/currentconditions/v1/${LocationData.Key}`
      const weather = await axios.get(`https://mym62feki7.execute-api.us-east-1.amazonaws.com/stage-1/${latitude},${longitude}`).then(res => res.data);
      // console.log(weather.daily.data);
      // console.log(weather)
      const geo = await axios.get(`https://us1.locationiq.com/v1/reverse.php`,
        {
          params: {
            key: this.API_KEY,
            lat: latitude,
            lon: longitude,
            format: 'json'
          }
        }).then(res => {
          console.log(res.data);

          return res.data;
        })
      this.setState({ geo, weather })
    }
    getUserLocation()
      .then(showPosition)
      .catch(function (err) {
        console.log(err);
      });

    const { geo, weather } = this.state;

  }





  handleTemperatureChange = () => {


    const { weather, day, metric } = this.state

    if (weather.daily) {
      if (metric === false) {
        this.setState({ metric: true })
      } else {
        this.setState({ metric: false })
      }
    }
  }

  handleDay = (i) => {

    this.setState({ day: i })

  }



  handleLocationChange = async (searchString) => {


    const location = await axios.get(`https://us1.locationiq.com/v1/search.php`,
      {
        params: {
          key: this.API_KEY,
          q: searchString,
          format: 'json'
        }
      }).then(res => res.data)
    // console.log(location)
    const { lat, lon } = location[0]
    const weather = await axios.get(`https://mym62feki7.execute-api.us-east-1.amazonaws.com/stage-1/${lat}, ${lon}`)
      .then(res => {
        // console.log(res.data)
        return res.data
      })



    this.setState({ weather, value: searchString })
  }


 

 
  



  

  render() {
    console.log('main state: ', this.state)
    const days = ["Sunday", "Monday", "Tuesday",
      "Wednesday", "Thursday", "Friday",
      "Saturday"];
    const today = new Date().getDay();
    const daysRestructured = days.slice(today, days.length).concat(days.slice(0, today))
    // console.log(daysRestructured)

    const { geo, weather, day, metric, value } = this.state || "";
    const { state, city, town } = geo.address || "";
    const { data } = weather.daily || "";
    
    console.log(Abbreviations)

    const cityStateDefault = geo ? `${city ? city : town}, ${Abbreviations.filter(obj => obj["name"]===state)[0].abbreviation}` : '' ;




    return (

      <div className="project-border app-background">
        {data ?
          <Container fluid >
            <Row className="row-1">
              <Col xs="9" lg="4" className="left-side">

                <ManageDropdown handleLocationChange = {this.handleLocationChange}
                                cityStateDefault = {cityStateDefault}
                />
                                

                    
                
                <h3 style={{ 'font-size': '10px', 'padding-bottom': '10px' }}>or type a location</h3>
                <h3>{daysRestructured[day]}</h3>
                <h3>{/*day===0 ? weather.minutely.summary :*/data[day].summary}</h3>




              </Col>
              <Col xs="6" md="4" className="text-center  padding-0">

                <WeatherIcon name="darksky"

                  iconId={day === 0 ? weather.minutely.icon : data[day].icon}
                  flip="horizontal"
                  rotate="90"
                  className="main-weather-icon" />


                <p className="main-weather-text">{metric
                  ?
                  Math.round((data[day].apparentTemperatureHigh - 32) * 5 / 9) :
                  Math.round(data[day].apparentTemperatureHigh)}<sup onClick={this.handleTemperatureChange} style={{ 'cursor': 'pointer' }}>°F |°C</sup></p>




              </Col>
              <Col xs="6" md="4" className="right-side padding-0">
                <h3>Precipitation: {`${Math.round(data[day].precipProbability * 100)}%`}<br />
                  Humidity: {`${Math.round(data[day].humidity * 100)}%`} <br />
                  Wind: {`${Math.round(data[day].windSpeed)} mph`}<br /> </h3>




              </Col>

            </Row>

            <hr className="my-2" />

            <Row className="overflow">

              {data.slice(0, 7).map((item, i) => {
                /* console.log(data.slice(0,6))*/
                return (
                  <Col onClick={() => this.handleDay(i)} className={`scroll-grid text-center padding-5`} style={i === day ? { 'box-sizing': 'content-box', 'background': '#fdfbfb', 'border': 'solid #dfdfdf 1px' } : null} key={i}>
                    <p>{daysRestructured[i].substr(0, 3)}<span class="lg-view">{daysRestructured[i].substr(3, daysRestructured[i].length)}</span></p>
                    <WeatherIcon name="darksky"
                      className="weather-icon"
                      key={i}
                      iconId={i === 0 ? weather.minutely.icon : data[i].icon}
                      flip="horizontal"
                      rotate="90" />
                    <p>{Math.round(data[i].apparentTemperatureHigh)} | {Math.round(data[i].apparentTemperatureLow)}</p>
                  </Col>

                )

              })}
              {/*<Col xs={2}></Col>*/}




            </Row>




          </Container> : <h2 style={{ 'color': '#d9d9d9' }}>Loading...</h2>}


      </div>
    );
  }
}

export default WeatherApp;


/*handleChange = {this.handleChange}
dropdownOpen = {this.state.dropdownOpen}
value = {this.state.value}
clear = {this.clearInput}
placeholder = {this.state.isClear ? '' : cityStateDefault}
toggle = {this.checkandToggleDropDown}
inputRef = {this.inputRef} */