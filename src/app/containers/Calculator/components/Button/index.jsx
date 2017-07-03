import Ink from 'react-ink';
import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.css';

const propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const Button = props => {
  let style;

  if (props.type === 'operator') style = styles.ButtonOperate;
  else if (props.type === 'zero') style = styles.ButtonZero;
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
