import { Record } from 'immutable';

const WeatherStationDetailsModel = Record({
  id:-1,
  temp: 14,
  pressure: 0,
  humidity: 0,
  wind: null,
  visibility: null,
  rain:null,
  dt: 0
});

export default WeatherStationDetailsModel;