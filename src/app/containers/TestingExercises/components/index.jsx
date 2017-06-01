import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const TestingExercises = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

TestingExercises.propTypes = propTypes;

export default TestingExercises;
