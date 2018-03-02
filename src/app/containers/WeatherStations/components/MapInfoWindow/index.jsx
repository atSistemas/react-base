import React from 'react'
import { PropTypes } from 'prop-types'
import { pure } from 'recompose'

import styles from './styles.css'

const propTypes = {
  main: PropTypes.object.isRequired
}

export const MapInfoWindow = props => {
  const { temp, humidity, pressure } = props.main

  return (
    <div className={ styles.infoWindowBox } >
      <span className={ styles.infoWindowRow }>
        Temp: <b>{ `${temp} ºC` }</b>
      </span>
      <span className={ styles.infoWindowRow }>
        Humidity: <b>{ `${humidity} %` }</b>
      </span>
      <span className={ styles.infoWindowRow }>
        Pressure: <b>{ `${pressure} hpa` }</b>
      </span>
    </div>
  )
}

MapInfoWindow.propTypes = propTypes

export default pure(MapInfoWindow)
