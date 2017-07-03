import React from 'react';
import { PropTypes } from 'prop-types';
import dateformat from 'dateformat';
import styles from './styles.css';

const propTypes = {
  item: PropTypes.object.isRequired
};

const WeatherDetailItem = props => {
  const item = props.item;

  const d =  new Date(item.dt*1000);

  return (
    <div className={ styles.weatherDetailRow } >
      <span className={ styles.dayBox }>{ dateformat(d, 'dd/mm/yyyy') }  </span>
      <span className={ styles.rowItem }> Day Temperature: <b> { item.temp.day } ºC </b> </span>
      <span className={ styles.rowItem }> Min Daily Temperature: <b> { item.temp.min } ºC </b></span>
      <span className={ styles.rowItem }> Max Daily Temperature: <b> { item.temp.max } ºC </b></span>
      <span className={ styles.rowItem }> Night Temperature: <b> { item.temp.night } ºC </b></span>
      <span className={ styles.rowItem }> Evening Daily Temperature: <b> { item.temp.eve } ºC </b></span>
      <span className={ styles.rowItem }> Morning Daily Temperature: <b> { item.temp.morn } ºC </b></span>
    </div>
  );
};

WeatherDetailItem.propTypes= propTypes;

export default WeatherDetailItem;
