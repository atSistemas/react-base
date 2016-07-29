import { Record, Map } from 'immutable';
import { generateImmutable } from 'shared/ModelHelper';

const WeatherStationsModel = new Record({
  id:0,
  stationId: 0,
  distance: 0,
  last: null,
  station:null
});

const ForecastModel = new Record({
  clouds: 0,
  deg: 0,
  dt: 0,
  humidity: 0,
  pressure:0,
  speed:0,
  temp:{},
  weather: []
});

const WeatherStationDetailsModel = new Record({
  id:-1,
  temp: 14,
  pressure: 0,
  humidity: 0,
  wind: null,
  visibility: null,
  rain:null,
  dt: 0
});

const WeatherStationsCollection = new Record(
  { 
    data: new Map(), 
    stationSelected:-1, 
    forecast: new Map(), 
    weatherStationDetails:  new Map()
  });

function setInitialState(initialState){
  return initialState.WeatherStations = new WeatherStationsCollection({
    data: generateImmutable( initialState.WeatherStations.data, WeatherStationsModel ),
    forecast: generateImmutable( initialState.WeatherStations.forecast, ForecastModel ),
    weatherStationDetails: generateImmutable( initialState.WeatherStations.weatherStationDetails, WeatherStationDetailsModel )
  });
}

export { WeatherStationsModel, WeatherStationsCollection, ForecastModel, WeatherStationDetailsModel, setInitialState };
