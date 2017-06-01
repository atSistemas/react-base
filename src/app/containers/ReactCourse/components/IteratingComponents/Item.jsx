import React  from 'react';
import { PropTypes, shape } from 'prop-types';

const propTypes= {
  data: shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

const Item = ( data ) => (
  <div>
    <span>{ data.id }</span>
    <span>{ data.name }</span>
  </div>
);

Item.propTypes = propTypes;

export default Item;
