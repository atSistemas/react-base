import { Record } from 'immutable';

const WeatherStationsModel = new Record({
  id:0,
  stationId: 0,
  distance: 0,
  last: null,
  station:null
});

export default WeatherStationsModel;