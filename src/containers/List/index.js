import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as ItemsActions from '../../actions/Items'
import fetchRequiredActions from '../../shared/fetch-data'

import types from '../../types'
import Row from '../../components/Row'
import HeaderList from '../../components/HeaderList'

class List extends Component {

  static requiredActions = [ItemsActions.fetchItems];

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const { items } = this.props
    fetchRequiredActions(List.requiredActions, this.props)
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
    const { items } = this.props

    const list = (
      items.items.map((item, index) => (
        <Row { ...item } key={ index } onClick={ () => this.onRowClick(item.id) } />
      ))
    )

    return (
      <div>
        <HeaderList />
        <ul>
        { list }
        </ul>
      </div>
     )
  }
}

const getVisibleItems = (state) => {

  let items = state.get('items');
  let filter = state.get('filter');

  console.log(333333, state)
  if (!items.wasAltered() && items.size == 0) {
    return null
  } else {
    items = items.toJS();
  }


  const obj = {
    'SHOW_ALL': () => items,
    'SHOW_REMOVED': () => items.filter(t => t.removed),
    'SHOW_ACTIVE': () =>  items.filter(t => !t.removed)
  }

  return  obj[filter] !== undefined ? obj[filter] (): obj.SHOW_ALL ()
}

export default connect(
  (state) => ({ items: getVisibleItems(state) })
)(List)
