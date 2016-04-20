import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchItems from '../../actions/Items'
import setVisibilityFilter from '../../actions/Filters'
import Row from '../../components/Row'

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
     dispatch(setVisibilityFilter(id))
   }

   render () {
     let list = null
     const { items, actions } = this.props
     if( items ){
       list = (
         items.map((item, index) => {
           return (
             <Row { ...item } key={ index } onClick={() => this.onRowClick(item.id)} />
           )
         })
       )
     }

     return (
        <ul>{ list }</ul>
     )
   }
}

List.propTypes = {
  fetchItems: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    items: state.items.list
  }
}

export default connect(
  mapStateToProps
)(List)
