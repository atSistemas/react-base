import { Record, Map } from 'immutable';

const WeatherStationsCollection = new Record({ 
  data: new Map(), 
  stationSelected:-1, 
  forecast: new Map(), 
  weatherStationDetails:  new Map()
});

export default WeatherStationsCollection;