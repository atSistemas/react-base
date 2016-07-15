import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import * as Actions from './actions';
import fetchRequiredActions from 'shared/FetchData';

import MapBox from './components/MapBox';
import styles from './styles.css';
import WeatherDetail from './components/WeatherDetail';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  WeatherStationsModel: React.PropTypes.instanceOf(Immutable.Record)
};

export class WeatherStations extends Component {

  static requiredActions = [Actions.getWeatherStations];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(WeatherStations.requiredActions, this.props, 'WeatherStationsModel');
  }
  
  shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    let props = this.props.WeatherStationsModel; 
    props.name = 'WeatherStations';

    return (
      <div className={ styles.WeatherStations  }>
        <MapBox name={ props.name } />
        <WeatherDetail />
      </div>
    );
  }

}

WeatherStations.propTypes = propTypes;


export default connect(
  (state) => ({ WeatherStationsModel: state.WeatherStations })
)(WeatherStations);
