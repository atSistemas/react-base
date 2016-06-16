import React, { PropTypes } from 'react';
import styles from './styles.css';

const propTypes= {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const Button = ({ value, onClick }) => {

  let style;
  if(value === '=') style = styles.ButtonEqual;
  if(value === '0') style = styles.Button0;
  else style = styles.Button;

  return (
    <button
      className={ style }
      onClick={ onClick }
    >
    { value }
    </button>
  );
};

Button.propTypes= propTypes;

export default Button;
