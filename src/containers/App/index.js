import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render(){
    let children = this.props.children

    return (
      <div>
        <Header />
        <main>
          { children }
        </main>
      </div>
    )
  }
}
