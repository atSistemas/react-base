import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import Item from './Item';
import NewItem from './NewItem';
import Filter from './Filter';

export class ListWithFilters extends Component {

  constructor (props) {
    super(props);
    this.state = {
      filter: true,
      items: [
        {
          id: 1,
          name: 'First item',
          active: true,
        },
        {
          id: 2,
          name: 'Second item',
          active: false
        },
        {
          id: 3,
          name: 'Third item',
          active: true
        },
      ]};
  }

  visibilityFilter = filter => {
    this.setState({
      filter: filter
    })
  }

  addNewItem = value => {
    this.setState({
      items: this.state.items.concat({
        id: this.state.items.length+1,
        name: value,
        active: true
      })
    })
  }

  render () {

    const items = this.state.items;
    const ItemsList = items.map( item => {
      if(item.active === this.state.filter) {
      return (
        <Item
          key={ item.id }
          { ...item }
        />
        )
      }
    }
  );
    return (
      <div>
        Filters:
        <Filter
        visibilityFilter={ this.visibilityFilter }
        />
        { ItemsList }
        <NewItem
          addNewItem={ this.addNewItem }
        />
      </div>
    );
  }
}

export default ListWithFilters;

/*  visibilityFilter = filter => {
    this.setState({
      filter,
      items: this.state.items
    })
  }

  
  addNewItem = value => {
    const items = this.state.items.concat({
      id:this.state.items.length+1,
      name: value,
      active: true
    });

    this.setState({
      filter: this.state.filter,
      items
    })
  }*/

/*
 <NewItem
          addNewItem={ this.addNewItem }
        />
*/

