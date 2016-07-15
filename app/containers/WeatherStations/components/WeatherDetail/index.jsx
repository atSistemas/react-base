import Immutable from 'immutable';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import WeatherDetailItem from '../WeatherDetailItem';

//import styles from './styles.css';

const propTypes = {
  WeatherDetail: PropTypes.instanceOf(Immutable.Record),
  ActualWeather: PropTypes.object,
  StationSelected: PropTypes.number.isRequired
};

export  class WeatherDetail extends Component {

  constructor (props) {
    super(props);
  }


  render () {
    let ActualWeather = this.props.ActualWeather;
    if (this.props.StationSelected === 0 ){
      return (
        <div>
        </div>
      );
    }

    let index=0;
    const actualWeatherList = ActualWeather.valueSeq().map( weather => {
      index++;
      return (<WeatherDetailItem key={ index } item={ weather } /> );
    });

    return(
      <div>
        { actualWeatherList }
      </div>
      );
    
  }}

WeatherDetail.propTypes = propTypes;

export default connect(
  (state) => ({ ActualWeather: state.WeatherStations.actualWeather, 
    StationSelected: state.WeatherStations.stationSelected })
)(WeatherDetail);
