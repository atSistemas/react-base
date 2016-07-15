import { Record, Map } from 'immutable';
import { generateImmutable } from 'shared/ModelHelper';

const WeatherStationsModel = new Record({
  id:0,
  distance: 0,
  last: null,
  station:null
});

const ActualWeatherModel = new Record({
  clouds: 0,
  deg: 0,
  dt: 0,
  humidity: 0,
  pressure:0,
  speed:0,
  temp:{},
  weather: []
});

const WeatherStationsCollection = new Record({ data: new Map(), stationSelected:-1, actualWeather: new Map() });

function setInitialState(initialState){
  return initialState.WeatherStations = new WeatherStationsCollection({
    data: generateImmutable( initialState.WeatherStations.data, WeatherStationsModel ),
    actualWeather: generateImmutable( initialState.WeatherStations.actualWeather, ActualWeatherModel )
  });
}

export { WeatherStationsModel, WeatherStationsCollection, ActualWeatherModel, setInitialState };
