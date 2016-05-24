import { connect } from 'react-redux'
import Immutable from 'immutable'
import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'

import * as ItemsActions from '../../actions/Items'
import fetchRequiredActions from '../../shared/fetch-data'
import types from '../../types'
import Row from '../../components/Row'
import HeaderList from '../../components/HeaderList'

class List extends Component {

 static requiredActions = [ItemsActions.fetchItems];

 static propTypes = {
   dispatch: PropTypes.func.isRequired,
   items: React.PropTypes.instanceOf(Immutable.Record)
 }

 constructor (props) {
   super(props)
   this.actions = bindActionCreators(ItemsActions, props.dispatch)
 }

 componentDidMount() {
   fetchRequiredActions(List.requiredActions, this.props, 'items')
 }

 render () {

   let items = this.props.items
   let itemList = items.data.valueSeq().map( item => {

    return <Row
            item ={ item }
            key={ item.get('id')}
            onClick={this.actions.changeItemState} />
    })

   return (
     <div>
     <HeaderList />
       { itemList }
      </div>
    )
 }
}


export default connect(
  (state, ownProps) => ({ items: state.items })
)(List);
