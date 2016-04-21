import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { setVisibilityFilter }from '../../actions/Filters'
import { fetchItems, changeItemState } from '../../actions/Items'

import Row from '../../components/Row'
import HeaderList from '../../components/HeaderList'

class List extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchItems())
   }

   onRowClick(id) {
     const { dispatch } = this.props
     dispatch(changeItemState(id))
   }

   render () {
     let list = null
     const { items, actions } = this.props
     if( items ){
       list = (
         items.map((item, index) => {
            return  (
               <Row { ...item } key={ index } onClick={() => this.onRowClick(item.id)} />
             )
         })
       )
     }

     return (
      <div>
        <HeaderList />
        <ul>{ list }</ul>
      </div>
     )
   }
}

const getVisibleItems = (items, filter) => {
  if (items == undefined)
    return null

  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_REMOVED':
      return items.filter(t => t.removed)
    case 'SHOW_ACTIVE':
      return items.filter(t => !t.removed)
    default:
      return items
  }
}


function mapStateToProps(state) {
  return {
    items: getVisibleItems(state.items.data, state.filter)
  }
}

export default connect(
  mapStateToProps
)(List)
