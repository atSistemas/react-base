import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const StatelessComponent = ( props ) => (

  <div>
    Hello stateless component !
    <div>
      { props.name }
    </div>
  </div>
);

StatelessComponent.propTypes = propTypes;

export default StatelessComponent;
