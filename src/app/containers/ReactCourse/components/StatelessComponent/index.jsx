import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const StatelessComponent = ({ name }) => (

  <div>
    Hello stateless component !
    <div>
      { name }
    </div>
  </div>
);

StatelessComponent.propTypes = propTypes;

export default StatelessComponent;
