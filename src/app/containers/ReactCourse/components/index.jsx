import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const ReactCourse = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

ReactCourse.propTypes = propTypes;

export default ReactCourse;
