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
     this.props.dispatch(fetchItems())
   }

   render () {

     let list = null
     const { items, actions } = this.props
     if( items ){
       list = (
         items.map(function (item, index) {
           return (
             <Row { ...item } key={ index } onClick={() => onRowClick(item.id)} />

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
  onRowClick: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    items: state.items.list
  }
}

//THAT WAS THE PROBLEM... MISSING DISPATCH :)
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onRowClick: (id) => {
      dispatch(setVisibilityFilter(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
