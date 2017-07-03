import React  from 'react';
import { Record } from 'immutable';
import { PropTypes } from 'prop-types';
import dateformat from 'dateformat';
import styles from './styles.css';

const propTypes = {
  details: PropTypes.instanceOf(Record).isRequired
};

const WeatherStationDetails = props => {
  const { details } = props;

  const windDirections = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];

  const wind = details.get('wind');
  const windDirectionDegrees = parseInt((wind.deg/22.5) + 0.5);

  const windDirection = windDirections[windDirectionDegrees % 16];

  const d =  new Date(details.dt*1000);

  return (
    <div className={ styles.weatherDetailBox } >
      <p><b>Actual Data of Weather Station</b></p>
      <div className={ styles.weatherDetailRow } >
        Temperature: { Math.round(details.get('temp')- 273.15) } ºC
      </div>
      <div className={ styles.weatherDetailRow } >
        Humidity: { details.get('humidity') } %
      </div>
      <div className={ styles.weatherDetailRow } >
        Temperature { details.get('pressure') } hpa
      </div>
      <div className={ styles.weatherDetailRow } >
        Wind Speed { wind.speed } m/s
      </div>
      <div className={ styles.weatherDetailRow } >
        Wind Direction { windDirection }
      </div>
      <div className={ styles.weatherDetailRow } >
        Last Date Updated: <br />
        { dateformat(d, 'HH:MM:ss dd/mm/yyyy') }
      </div>
    </div>
  );
};

WeatherStationDetails.propTypes = propTypes;

export default WeatherStationDetails;
