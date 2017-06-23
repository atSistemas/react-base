//'http://localhost:8000/mocks/weatherStations.json')

import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  visibilityFilter: PropTypes.func.isRequired
};

const Filter = ({ visibilityFilter }) => (
  <div>
  <b onClick={ () => visibilityFilter(true)} >Active</b>
  <b onClick={ () => visibilityFilter(false)}> Inactive</b>
  </div>
);

Filter.propTypes = propTypes;

export default Filter;
