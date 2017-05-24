import React from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  parentData: PropTypes.string.isRequired,
  parentFunction: PropTypes.func.isRequired
};

const ChildComponent = ({ parentData, parentFunction }) => (

  <div>
    <div>{ parentData }</div>
    <a href="" onClick={ () => parentFunction('updated parent data from child!') }>click me!</a>
  </div>

);

ChildComponent.propTypes= propTypes;

export default ChildComponent;
