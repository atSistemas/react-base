import { Map } from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { fetchRequiredActions } from 'base';
import * as Actions from './actions';
import MapBox from './components/MapBox';
import ForecastDetail from './components/ForecastDetail';
import styles from './styles.css';

export class WeatherStations extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    stations: PropTypes.instanceOf(Map).isRequired,
    selected: PropTypes.number.isRequired
  };

  static requiredActions = [Actions.getWeatherStations];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    fetchRequiredActions(
      WeatherStations.requiredActions,
      this.props,
      !this.props.stations.size
    );
  }

  onClick(key, childProps) {
    const newSelected = parseInt(key);

    if (this.props.selected !== newSelected) {
      this.actions.getWeather(childProps.lat, childProps.lng);
      this.actions.weatherStationSelected(newSelected);
    }
  }

  render () {
    const { stations, selected } = this.props;
    return (
      <div className={ styles.WeatherStations  }>
        <MapBox
          stations={ stations }
          onClick={ this.onClick }
        />
        { !!~selected && <ForecastDetail /> }
      </div>
    );
  }
}

export default connect(
  state => ({
    stations: state.WeatherStations.get('data'),
    selected: state.WeatherStations.get('stationSelected')
  })
)(WeatherStations);
