import React  from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.css';

const propTypes = {
  main: PropTypes.object.isRequired
};

const MapInfoWindow = ( props ) => {
  const main = props.main;

  let temp, humidity, pressure;

  if (main) {
    if ( main.temp ) {
      temp = Math.round(main.temp - 273.15 ) ;
    }

    if (main.humidity) {
      humidity = main.humidity;
    }

    if (main.pressure) {
      pressure = main.pressure;
    }
  }

  return (
    <div className={ styles.infoWindowBox } >
      <span className={ styles.infoWindowRow }>  Temp: <b>{ temp } ºC </b></span>
      <span className={ styles.infoWindowRow }> Humidity: <b>{ humidity } % </b></span>
      <span className={ styles.infoWindowRow }> Pressure: <b>{ pressure } hpa </b></span>
    </div>
  );
};

MapInfoWindow.displayName = 'MapInfoWindow';
MapInfoWindow.propTypes = propTypes;

export default MapInfoWindow;
