import { Record, Map } from 'immutable';

export const WeatherStationsCollection = new Record({ 
  data: new Map(), 
  stationSelected:-1, 
  forecast: new Map(), 
  weatherStationDetails:  new Map()
});
