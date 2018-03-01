import React from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import { PropTypes } from 'prop-types'

import ForecastDetailItem from '../ForecastDetailItem'

import styles from './styles.css'

const propTypes = {
  forecast: PropTypes.instanceOf(Map).isRequired
}

export const ForecastDetail = ({ forecast }) => {
  const forecastList = forecast.valueSeq().map((weather, i) => (
    <ForecastDetailItem key={ i } item={ weather } />
  ))

  return (
    <div>
      <h3 className={ styles.title }> FORECAST </h3>
      { forecastList }
    </div>
  )
}

ForecastDetail.propTypes = propTypes

export default connect(
  state => ({
    forecast: state.WeatherStations.get('forecast')
  })
)(ForecastDetail)
