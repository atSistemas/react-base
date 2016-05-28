import React,{ PropTypes } from 'react';
import { Link } from 'react-router';

const ReactBaseLogo = ({ logo } ) => (

  <Link to="/main">
    <img alt={ logo.alt } src={ logo.url } width={ logo.width } />
  </Link>
);

ReactBaseLogo.propTypes= {
  logo: PropTypes.object.isRequired,
  alt: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number
};

export default ReactBaseLogo;
