import { Record, Map } from 'immutable';

const WeatherStationsCollection = Record({ 
  data: Map(), 
  stationSelected:-1, 
  forecast: Map(), 
  weatherStationDetails: Map()
});

export default WeatherStationsCollection;