import React from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  parentData: PropTypes.string.isRequired,
  parentFunction: PropTypes.func.isRequired
};

const ChildComponent = ({ parentData, parentFunction }) => (

  <div onClick={ () => parentFunction('updated parent data from child!') }>
    </span>{ parentData }
  </div>

);

ChildComponent.propTypes= propTypes;

export default ChildComponent;
