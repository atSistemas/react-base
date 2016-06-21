import React, { PropTypes } from 'react';
import styles from './styles.css';
import Ink from 'react-ink';

const propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const Button = ( props ) => {
  let style;
  if(props.type === 'operator') style = styles.ButtonOperate;
  else if(props.type === 'zero') style = styles.ButtonZero;
  else style = styles.Button;

  return (
    <button
      onClick={ props.onClick }
      className={ style }
    >
    { props.value }
      <Ink
        radius={ 500 }
        opcatity={ 1 }
        recenter={ false }
      />
    </button>
  );
};

Button.propTypes= propTypes;

export default Button;
