import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const Ecma6 = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

Ecma6.propTypes = propTypes;

export default Ecma6;
