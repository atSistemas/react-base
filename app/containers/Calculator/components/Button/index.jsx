import React, { PropTypes } from 'react';
import styles from './styles.css';

const propTypes= {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const Button = ({ type, value, onClick }) => {

  let style;
  if(type !== 'number') style = styles.ButtonOperate;
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
