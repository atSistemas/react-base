import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const ReduxExercises = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

ReduxExercises.propTypes = propTypes;

export default ReduxExercises;
