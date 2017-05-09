import { Link } from 'react-router';
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.css';

const propTypes = {
  value: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

const LinkButton = ( props ) => {
  return (
    <Link className={ styles.LinkButton } to={ props.location }>
      <button>
        { props.value }
      </button>
    </Link>
  );
};

LinkButton.propTypes = propTypes;

export default LinkButton;
