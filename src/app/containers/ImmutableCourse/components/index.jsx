import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const ImmutableCourse = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

ImmutableCourse.propTypes = propTypes;

export default ImmutableCourse;
