import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GoogleMap from 'google-map-react';
import * as Actions from '../../actions';

import styles from './styles.css';

import MapMarker from '../MapMarker';

export class MapBox extends Component {

  static propTypes = {
    key: PropTypes.string.isRequired,
    center: PropTypes.object,
    zoom: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    stations: PropTypes.object.isRequired,
    stationSelected: PropTypes.number.isRequired
  };

  static defaultProps = {
    key: 'AIzaSyAUrK9ZaUL0Ga-RZYYFukBuTNm0qO3GbNI',
    center: { lat: 40.4047789, lng: -3.653974 },
    zoom: 6
  };

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
    this.onChildClick = this.onChildClick.bind(this);
  }

  onChildClick(key, childProps) {
    this.actions.getWeather(childProps.lat, childProps.lng);
    this.actions.weatherStationSelected(parseInt(key));
    this.actions.getWeatherStation(parseInt(childProps.stationId));
    return key;
  }

  render () {
    const { stations, stationSelected } = this.props;
    const mapMarkerList = stations.valueSeq().map(item => (
      <MapMarker
        key={ item.get('id') }
        lat={ item.coord.Lat }
        stationId={ item.stationId }
        lng={ item.coord.Lon }
        selected={ stationSelected }
        main={ item.main }
      />
    ));

    return (
      <div className={ styles.mapBox }>
        <GoogleMap
          id="map"
          bootstrapURLKeys={ { key: this.props.key } }
          defaultCenter={ this.props.center }
          onChildClick={ this.onChildClick }
          defaultZoom={ this.props.zoom }
        >
          { mapMarkerList }
        </GoogleMap>
      </div>
    );
  }}

export default connect(
  state => ({
    stations: state.WeatherStations.data,
    stationSelected: state.WeatherStations.stationSelected
  })
)(MapBox);
