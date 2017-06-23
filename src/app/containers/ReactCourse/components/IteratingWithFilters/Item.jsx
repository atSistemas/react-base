
import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

const Item = ({ id, name }) => (
  <div>
    <span>{ id }</span>
    <span>{ name }</span>
  </div>
);

Item.propTypes = propTypes;

export default Item;
