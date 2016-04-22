import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class <%= name %>  extends Component {

  constructor (props) {
    super(props)
  }


  render(){
    return (
     <div><%= name %>  Container</div>
      )
  }

}


export default connect()(<%= name %> )
