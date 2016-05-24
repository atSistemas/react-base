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
   fetchRequiredActions(List.requiredActions, this.props, 'items')
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

   const items = this.props.items.items
   let itemList = items.valueSeq().map( item => {
     return <Row
            item = { item }
            key={ item.get('id')}
            onClick={ () => this.onRowClick(item.id) }/>
    })
   return (
     <div>
       <HeaderList />
       <ul style={ listStyle }>{ itemList }</ul>
     </div>
    )
 }
}


export default connect( (state, ownProps) => ({ items: state.items }) )(List);
