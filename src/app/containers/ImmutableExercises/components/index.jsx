import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const ImmutableExercises = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

ImmutableExercises.propTypes = propTypes;

export default ImmutableExercises;
