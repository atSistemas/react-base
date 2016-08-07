import Ink from 'react-ink';
import { Link } from 'react-router';
import React, { PropTypes } from 'react';

import styles from './styles.css';

const propTypes = {
  value: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

const LinkButton = ( props ) => {
  return (
    <Link to={ props.location }>
      <button
        className={ styles.LinkButton }
      >
      { props.value }
      </button>
    </Link>
  );
};

LinkButton.propTypes= propTypes;

export default LinkButton;
