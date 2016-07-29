import Immutable from 'immutable';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import WeatherDetailItem from '../WeatherDetailItem';
import styles from './styles.css';

const propTypes = {
  WeatherDetail: PropTypes.instanceOf(Immutable.Record),
  Forecast: PropTypes.object,
  StationSelected: PropTypes.number.isRequired
};

export  class WeatherDetail extends Component {

  constructor (props) {
    super(props);
  }


  render () {
    let Forecast = this.props.Forecast;
    if (this.props.StationSelected === -1 ){
      return (
        <div>
        </div>
      );
    }

    let index = 0;

    const actualWeatherList = Forecast.valueSeq().map( weather => {
      index++;
      return (<WeatherDetailItem key={ index } item={ weather } /> );
    });

    return(
      <div>
        <h3 className={ styles.title }> FORECAST </h3>
        { actualWeatherList }
      </div>
      );
    
  }}

WeatherDetail.propTypes = propTypes;

export default connect(
  (state) => ({ Forecast: state.WeatherStations.forecast, 
    StationSelected: state.WeatherStations.stationSelected })
)(WeatherDetail);
