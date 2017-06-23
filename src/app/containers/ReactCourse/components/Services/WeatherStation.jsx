
import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  stationId: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired
};

const WeatherStation = ( props ) => (
  <div>
    <b>StationId</b>
    <span>{ props.stationId }</span>
     <b>Distance</b>
    <span>{ props.distance }</span>
  </div>
);

WeatherStation.propTypes = propTypes;

export default WeatherStation;
