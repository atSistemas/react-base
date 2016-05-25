import React,{ PropTypes } from 'react';

const ReactBaseLogo = ({ alt }) => (

  <img alt={ alt } src="/assets/images/react-base-logo.png" width="500" />

);

ReactBaseLogo.propTypes= {
  alt: PropTypes.string
};

export default ReactBaseLogo;
