import React, { Component } from 'react';
import Row from '../../components/Row'

const List = ({ items, onTodoClick }) => (

  <ul>
    {items.map(item =>
      <List
        key={item.id}
        {...item}
        onClick={() => onTodoClick(item.id)}
      />
    )}
  </ul>

)


List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default List
