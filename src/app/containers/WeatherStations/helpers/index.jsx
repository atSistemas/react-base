import { generateMap } from 'base/shared/ModelHelper'
import { WeatherStationsModel, ForecastModel, WeatherStationDetailsModel } from '../models'

export function parseWeatherStations (data) {
  for (let i = 0; i < data.length; i++) {
    data[i].id = i + 1
    data[i].stationId = data[i].station.id

    if (data[i].station.coord.lng) {
      data[i].station.coord.lon = data[i].station.coord.lng
    }
  }
  return generateMap(data, WeatherStationsModel)
}

export function parseWeatherStation (data) {
  const dataParsed = getDataWeatherStation(data)
  return generateMap(dataParsed, WeatherStationDetailsModel)
}

export function parseWeather (data) {
  for (let i = 0; i < data.list.length; i++) {
    data.list[i].id = i + 1
  }
  return generateMap(data.list, ForecastModel)
}

export function getDataWeatherStation (data) {
  let obj = {}
  if (data.params.indexOf('temp') > -1) {
    obj.temp = data.last.main.temp
  }

  if (data.params.indexOf('humidity') > -1) {
    obj.humidity = data.last.main.humidity
  }

  if (data.params.indexOf('pressure') > -1) {
    obj.pressure = data.last.main.pressure
  }

  if (data.params.indexOf('wind') > -1) {
    obj.wind = data.last.wind
  }

  if (data.params.indexOf('visibility') > -1) {
    obj.visibility = data.last.visibility
  }

  if (data.params.indexOf('rain') > -1) {
    obj.rain = data.last.rain
  }

  obj.id = data.station.id
  obj.dt = data.last.dt

  let list = [obj]

  return list
}
