import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ForecastDetailItem from '../ForecastDetailItem';
import styles from './styles.css';

export class ForecastDetail extends Component {

  static propTypes = {
    Forecast: PropTypes.object.isRequired,
    StationSelected: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    let Forecast = this.props.Forecast;
    if (this.props.StationSelected === -1) {
      return (
        <div />
      );
    }

    let index = 0;

    const forecastList = Forecast.valueSeq().map(weather => {
      index++;
      return (
        <ForecastDetailItem key={ index } item={ weather } />
      );
    });

    return (
      <div>
        <h3 className={ styles.title }> FORECAST </h3>
        { forecastList }
      </div>
    );

  }}

export default connect(
  (state) => ({
    Forecast: state.WeatherStations.forecast,
    StationSelected: state.WeatherStations.stationSelected
  })
)(ForecastDetail);
