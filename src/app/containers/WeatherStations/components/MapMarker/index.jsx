import React from 'react';
import { PropTypes } from 'prop-types';
import { pure } from 'recompose';

import { stationStyle,
  stationCircleStyle, stationCircleStyleHover,
  stationInfoWindowStyleHover, stationInfoWindowStyle } from './stylesMarker';

import MapInfoWindow from '../MapInfoWindow';

const propTypes = {
  zIndex: PropTypes.number,
  main: PropTypes.object.isRequired,
  $hover: PropTypes.bool
};

export const MapMarker = ({ zIndex,  main, $hover }) => {

  const style = {
    ...stationStyle,
    zIndex: $hover ? 1000 : zIndex
  };
  const circleStyle = $hover ? stationCircleStyleHover : stationCircleStyle;
  const InfoWindowStyle = $hover ? stationInfoWindowStyleHover : stationInfoWindowStyle;

  const info = (
    <div style={ InfoWindowStyle }>
      <MapInfoWindow main={ main } />
    </div>
  );
  return (
    <div style={ style }>
      <div style={ circleStyle }>
      </div>
      { $hover && info }
    </div>
  );

};

MapMarker.propTypes = propTypes;

export default pure(MapMarker);
