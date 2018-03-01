import { createActionType } from 'base'

export default createActionType([
  'WEATHERSTATIONS_REQUEST',
  'WEATHERSTATIONS_SUCCESS',
  'WEATHERSTATIONS_ERROR',
  'WEATHERSTATION_REQUEST',
  'WEATHERSTATION_SUCCESS',
  'WEATHERSTATION_ERROR',
  'WEATHERSTATION_SELECTED',
  'FORECAST_REQUEST',
  'FORECAST_SUCCESS',
  'FORECAST_ERROR'
])
