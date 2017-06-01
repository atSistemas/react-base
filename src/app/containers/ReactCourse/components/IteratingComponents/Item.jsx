import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

const Item = ( data ) => (
  <div>
    <span>{ data.id }</span>
    <span>{ data.name }</span>
  </div>
);

Item.propTypes = propTypes;

export default Item;
