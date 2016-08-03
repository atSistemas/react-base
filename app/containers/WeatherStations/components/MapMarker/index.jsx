import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {
  stationStyle,
  stationCircleStyle, stationCircleStyleHover,
  stationStickStyle, stationStickStyleHover, stationStickStyleShadow,
  stationInfoWindowStyleHover, stationInfoWindowStyle } from './stylesMarker';

import MapInfoWindow from '../MapInfoWindow';


export default class MapMarker extends Component {
 
  static propTypes = {
    name: PropTypes.string,
    zIndex: PropTypes.number,
    main: PropTypes.object,
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
