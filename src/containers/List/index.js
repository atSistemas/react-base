import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { setVisibilityFilter } from '../../actions/Filters'
import * as ItemsActions from '../../actions/Items'
import { fetchRequiredActions } from '../../shared/fetch-data'

import Row from '../../components/Row'
import HeaderList from '../../components/HeaderList'

class List extends Component {

  static requiredActions = [ItemsActions.fetchItems];

  constructor (props) {
    super(props)
  }

  componentDidMount() {
    fetchRequiredActions( List.requiredActions, this.props )
   }

   onRowClick(id) {
     const { dispatch } = this.props
     dispatch(ItemsActions.changeItemState(id))
   }

   render () {
     let list = null
     const { items } = this.props
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
 
  const obj = {
    'SHOW_ALL': () => items,
    'SHOW_REMOVED': () => items.filter(t => t.removed), 
    'SHOW_ACTIVE': () =>  items.filter(t => !t.removed)
    
  }

  return  obj[filter] !== undefined ? obj[filter] (): obj.SHOW_ALL ()
}


function mapStateToProps(state) {
  return {
    items: getVisibleItems(state.items.data, state.filter)
  }
}

export default connect(
  mapStateToProps
)(List)
