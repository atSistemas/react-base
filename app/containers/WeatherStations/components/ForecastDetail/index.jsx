import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import ForecastDetailItem from '../ForecastDetailItem';
import styles from './styles.css';

const propTypes = {
  Forecast: PropTypes.object,
  StationSelected: PropTypes.number.isRequired
};

export class ForecastDetail extends Component {

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

    const forecastList = Forecast.valueSeq().map( weather => {
      index++;
      return (<ForecastDetailItem key={ index } item={ weather } /> );
    });

    return(
      <div>
        <h3 className={ styles.title }> FORECAST </h3>
        { forecastList }
      </div>
      );
    
  }}

ForecastDetail.propTypes = propTypes;

export default connect(
  (state) => ({ Forecast: state.WeatherStations.forecast, 
    StationSelected: state.WeatherStations.stationSelected })
)(ForecastDetail);
