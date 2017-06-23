
import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

const Item = (props) => (
  <div>
    <span>{ props.id }</span>
    <span>{ props.name }</span>
  </div>
);

Item.propTypes = propTypes;

export default Item;
