import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import * as Actions from '../../actions';

import styles from './styles.css';

import MapMarker from '../MapMarker';

export  class MapBox extends Component {

  static propTypes = {
    key: PropTypes.string.isRequired,
    center: PropTypes.object,
    zoom: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    Stations: PropTypes.object,
    StationSelected: PropTypes.number
  };

  static defaultProps = {
    key: 'AIzaSyAUrK9ZaUL0Ga-RZYYFukBuTNm0qO3GbNI',
    center: { lat: 39.938043, lng: -4.337157 },
    zoom: 6
  };

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  onChildClick = (key, childProps) => {

    this.actions.getWeather(childProps.lat, childProps.lng);
    this.actions.weatherStationSelected(parseInt(key));
    this.actions.getWeatherStation(parseInt(childProps.stationId));

    return key;
  }

  render () {
    let Stations = this.props.Stations;
    let StationSelected = this.props.StationSelected;
    const mapMarkerList = Stations.valueSeq().map( item => {
      return (
        <MapMarker
          key={ item.get('id') }
          lat={ item.station.coord.lat }
          stationId={ item.stationId }
          lng={ item.station.coord.lon }
          selected={ StationSelected }
          distance={ item.get('distance') }
          main={ item.last.main }
          station={ item.get('station') }
        />
        );

    });


    return (
      <div className={ styles.mapBox }>
        <GoogleMap
          id="map"
          bootstrapURLKeys={ { key:this.props.key } }
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
  (state) => ({
    Stations: state.WeatherStations.data,
    StationSelected: state.WeatherStations.stationSelected
  })
)(MapBox);
