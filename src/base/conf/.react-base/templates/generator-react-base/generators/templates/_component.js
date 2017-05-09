import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const <%= name %> = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

<%= name %>.propTypes = propTypes;

export default <%= name %>;
