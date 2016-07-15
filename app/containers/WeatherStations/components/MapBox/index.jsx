import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import * as Actions from '../../actions';

import GoogleMap from 'google-map-react';

import styles from './styles.css';

import MapMarker from '../MapMarker';

const propTypes = {
  key: PropTypes.string.isRequired,
  center: PropTypes.object,
  zoom: PropTypes.number,
  onChildClick: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
  Stations: PropTypes.object,
  StationSelected: PropTypes.number
};

export  class MapBox extends Component {

  static defaultProps = {
    key: 'AIzaSyAUrK9ZaUL0Ga-RZYYFukBuTNm0qO3GbNI',
    center: {lat: 39.938043, lng: -4.337157},
    zoom: 6
  };

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  _onChildClick = (key, childProps) => {

   
    this.actions.getWeather(childProps.lat, childProps.lng);
    this.actions.weatherStationSelected(parseInt(key));
  }

  render () {
    let Stations = this.props.Stations;
    let StationSelected = this.props.StationSelected;
    const mapMarkerList = Stations.valueSeq().map( item => {
      return (<MapMarker      
        key={ item.get('id') }
        lat={ item.station.coord.lat }
        lng={ item.station.coord.lon }
        selected={ StationSelected }
        distance={ item.get('distance') }
        main={ item.last.main }
        station={ item.get('station') }
      />);

    });


    return (
      <div className={ styles.mapBox }>
        <GoogleMap 
          id="map"
          bootstrapURLKeys={ { key:this.props.key } }
          defaultCenter={ this.props.center }
          onChildClick={ this._onChildClick }
          defaultZoom={ this.props.zoom } 
        >
            { mapMarkerList }
        </GoogleMap>
      </div>
    );
  }}

MapBox.propTypes = propTypes;

export default connect(
  (state) => ({ Stations: state.WeatherStations.data, 
    StationSelected: state.WeatherStations.stationSelected })
)(MapBox);
