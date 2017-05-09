import React  from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

const propTypes= {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};

const ReactBaseLogo = ( props ) => (

  <Link to="/main">
    <img alt={ props.alt } src={ props.src } width={ props.width } />
  </Link>
);

ReactBaseLogo.propTypes= propTypes;

export default ReactBaseLogo;
