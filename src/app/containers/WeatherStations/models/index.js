import { Record, Map } from 'immutable'
import { generateImmutable } from 'base/shared/ModelHelper'
import WeatherStationsModel from './WeatherStationsModel'
import ForecastModel from './ForecastModel'
import WeatherStationDetailsModel from './WeatherStationDetailsModel'

const WeatherStationsCollection = Record({
  data: Map(),
  stationSelected: -1,
  forecast: Map(),
  weatherStationDetails: Map()
})

const setInitialState = initialState => {
  initialState.WeatherStations = new WeatherStationsCollection({
    data: generateImmutable(initialState.WeatherStations.data, WeatherStationsModel),
    forecast: generateImmutable(initialState.WeatherStations.forecast, ForecastModel),
    weatherStationDetails: generateImmutable(initialState.WeatherStations.weatherStationDetails, WeatherStationDetailsModel)
  })
  return initialState.WeatherStations
}

export { WeatherStationsModel, WeatherStationsCollection, ForecastModel, WeatherStationDetailsModel, setInitialState }
