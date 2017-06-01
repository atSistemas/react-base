import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const Ecma6Exercises = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

Ecma6Exercises.propTypes = propTypes;

export default Ecma6Exercises;
