import { Record } from 'immutable';

export const WeatherStationDetailsModel = new Record({
  id:-1,
  temp: 14,
  pressure: 0,
  humidity: 0,
  wind: null,
  visibility: null,
  rain:null,
  dt: 0
});
