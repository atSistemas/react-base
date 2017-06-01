import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const ReactExercises = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

ReactExercises.propTypes = propTypes;

export default ReactExercises;
