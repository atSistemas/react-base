import React, { Component } from 'react';
import WeatherStation from './WeatherStation';
import fetch from 'isomorphic-fetch';
import Link from 'react-router';

class Services extends Component {

  constructor(props) {
    super();
    this.state = {stations: []};
  }

  componentWillMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('http://localhost:8000/mocks/weatherStations.json')
      .then(req => req.json())
      .then(data => this.setState({stations: data}))
      .catch(err => console.log(err));
  }
  
  render() {
    const stations = this.state.stations;
    const WeatherStationList = stations.map( station => (
        <WeatherStation
          key={ station.id }
          { ...station }
        />
    )
  );
    return (
      <div> 
        { WeatherStationList }
     </div>
    );
  }
}

export default Services;