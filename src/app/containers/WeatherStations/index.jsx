import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import fetchRequiredActions from 'base/shared/FetchData';

import * as Actions from './actions';

import MapBox from './components/MapBox';
import styles from './styles.css';
import ForecastDetail from './components/ForecastDetail';
import WeatherStationDetails from './components/WeatherStationDetails';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  WeatherStationsModel: React.PropTypes.instanceOf(Immutable.Record),
  WeatherStationDetailsState: React.PropTypes.instanceOf(Immutable.Map),
  StationSelected: React.PropTypes.number
};

export class WeatherStations extends Component {

  static requiredActions = [Actions.getWeatherStations];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    const force = this.props['WeatherStationsModel'].get('data').size === 0;
    fetchRequiredActions(WeatherStations.requiredActions, this.props, 'WeatherStationsModel', force);
  }
  
  shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    let props = this.props.WeatherStationsModel;
    const WeatherStationDetailsState = this.props.WeatherStationDetailsState;
    const stationList = WeatherStationDetailsState.valueSeq().map( station => {
      
      return (<WeatherStationDetails
        key={ station.id }
        selected={ this.props.StationSelected } 
        details={ station } 
      />);

    });

    props.name = 'WeatherStations';
    return (
      <div className={ styles.WeatherStations  }>
        <MapBox name={ props.name } />        
        { stationList }
        <div className={ styles.clear } />
        <div>
          <ForecastDetail />
        </div>
      </div>
    );
  }

}

WeatherStations.propTypes = propTypes;

export default connect(
  (state) => ({ 
    WeatherStationsModel: state.WeatherStations, 
    WeatherStationDetailsState:state.WeatherStations.weatherStationDetails, 
    StationSelected: state.WeatherStations.stationSelected 
  })
)(WeatherStations);
