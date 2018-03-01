import React from 'react'
import { PropTypes } from 'prop-types'
import { pure } from 'recompose'

import GoogleMap from 'google-map-react'

import styles from './styles.css'

import MapMarker from '../MapMarker'

const propTypes = {
  key: PropTypes.string.isRequired,
  center: PropTypes.object,
  zoom: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  stations: PropTypes.object.isRequired
}

const defaultProps = {
  key: 'AIzaSyAUrK9ZaUL0Ga-RZYYFukBuTNm0qO3GbNI',
  center: { lat: 40.4047789, lng: -3.653974 },
  zoom: 6
}

export const MapBox = props => {
  const mapMarkerList = props.stations.valueSeq().map(item => (
    <MapMarker
      key={ item.get('id') }
      lat={ item.get('coord').Lat }
      stationId={ item.get('stationId') }
      lng={ item.get('coord').Lon }
      main={ item.get('main') }
    />
  ))

  return (
    <div className={ styles.mapBox }>
      <GoogleMap
        id="map"
        bootstrapURLKeys={ { key: props.key } }
        defaultCenter={ props.center }
        defaultZoom={ props.zoom }
        onChildClick={ props.onClick }
      >
        { mapMarkerList }
      </GoogleMap>
    </div>
  )
}

MapBox.propTypes = propTypes
MapBox.defaultProps = defaultProps

export default pure(MapBox)
