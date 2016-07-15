import React, { PropTypes } from 'react';
import styles from './styles.css';
import dateformat from 'dateformat';

const propTypes = {
  props: PropTypes.object,
  item: PropTypes.object
};

const WeatherDetailItem = ( props ) => {
  const item = props.item;


  const d =  new Date(item.dt*1000);

  return (
    <div className={ styles.weatherDetailRow } >
      <span className={ styles.dayBox }>{ dateformat(d, 'dd/mm/yyyy') }  </span>
      <span className={ styles.rowItem }> Day Temperature: { item.temp.day } ºC </span>
      <span className={ styles.rowItem }> Min Daily Temperature: { item.temp.min } ºC </span>
      <span className={ styles.rowItem }> Max Daily Temperature: { item.temp.max } ºC </span>
      <span className={ styles.rowItem }> Night Temperature: { item.temp.night } ºC </span>
      <span className={ styles.rowItem }> Evening Daily Temperature: { item.temp.eve } ºC </span>
      <span className={ styles.rowItem }> Morning Daily Temperature: { item.temp.morn } ºC </span>
    </div>
  );
};

WeatherDetailItem.propTypes= propTypes;

export default WeatherDetailItem;
