import { Record } from 'immutable';

export const ForecastModel = new Record({
  clouds: 0,
  deg: 0,
  dt: 0,
  humidity: 0,
  pressure:0,
  speed:0,
  temp:{},
  weather: []
});