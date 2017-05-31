import React from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  parentData: PropTypes.string.isRequired,
  parentFunction: PropTypes.func.isRequired
};

const ChildComponent = ({ parentData, parentFunction }) => (

  <div>
    <div>{ parentData }</div>
    <span onClick={ () => parentFunction('updated parent data from child!') }>click me!</span>
  </div>

);

ChildComponent.propTypes= propTypes;

export default ChildComponent;
