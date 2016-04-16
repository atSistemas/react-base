import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import requestItems from '../../actions/Items'
import Row from '../../components/Row'

class List extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    let url = 'http://jsonplaceholder.typicode.com/posts';
     this.props.dispatch(requestItems(url))
   }

   render () {

     let list = null
     const { items } = this.props

     if( items ){
       list = (
         items.map(function (item, index) {
           return (
             <Row { ...item } key={ index } />
           )
         })
       )
     }

     return (
        <ul>{ list }</ul>
     )
   }
}


function mapStateToProps(state) {
  return {
    items: state.items.list
  }
}

export default connect(mapStateToProps)(List)
