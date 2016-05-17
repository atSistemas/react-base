import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as ItemsActions from '../../actions/Items'
import { fetchRequiredActions } from '../../shared/fetch-data'

import Row from '../../components/Row'
import HeaderList from '../../components/HeaderList'

class List extends Component {

  static requiredActions = [ItemsActions.fetchItems];

  static propTypes = {
    items: PropTypes.array,
    dispatch: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const { items } = this.props
    fetchRequiredActions( List.requiredActions, this.props, items)
  }

  onRowClick(id) {
    const { dispatch } = this.props
    dispatch(ItemsActions.fetchItem(id))
    dispatch(ItemsActions.changeItemState(id))
  }

  render () {
    let listStyle={
      listStyle:'none'
    }
    let list = null
    const { items } = this.props
    if( items ){
      list = (
        items.map((item, index) => {
          return  (
            <Row { ...item } key={ index } onClick={ () => this.onRowClick(item.id) } />
            )
        })
      )
    }

    return (
      <div>
        <HeaderList />
        <ul style={ listStyle }>{ list }</ul>
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


export default connect(
  (state) => ({ items: getVisibleItems(state.items.data, state.filter) })
)(List)
