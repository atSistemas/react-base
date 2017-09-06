import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import shouldPureComponentUpdate from 'react-pure-render/function';

import { stationStyle,
  stationCircleStyle, stationCircleStyleHover,
  stationStickStyle, stationStickStyleHover, stationStickStyleShadow,
  stationInfoWindowStyleHover, stationInfoWindowStyle } from './stylesMarker';

import MapInfoWindow from '../MapInfoWindow';

export default class MapMarker extends Component {

  /* eslint  react/require-default-props: 0 */
  static propTypes = {
    zIndex: PropTypes.number,
    main: PropTypes.object.isRequired,
    $hover: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { zIndex,  main } = this.props;

    const style = {
      ...stationStyle,
      zIndex: this.props.$hover ? 1000 : zIndex
    };
    const circleStyle = this.props.$hover ? stationCircleStyleHover : stationCircleStyle;
    const stickStyle = this.props.$hover ? stationStickStyleHover : stationStickStyle;
    const InfoWindowStyle = this.props.$hover ? stationInfoWindowStyleHover : stationInfoWindowStyle;

    return (
      <div style={ style }>
        <div style={ stationStickStyleShadow } />
        <div style={ circleStyle } />
        <div style={ stickStyle } />
        <div style={ InfoWindowStyle }>
          <MapInfoWindow main={ main } />
        </div>
      </div>
    );

  }
}
