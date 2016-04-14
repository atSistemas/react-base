import React, { Component } from 'react';
import ReactBaseLogo from '../components/logo'

class Home extends Component {
  componentWillMount() {
    return false;
  }

  render() {
    return (
      <div>
        <ReactBaseLogo alt="Logo"/>
      </div>
    )
  }

}

export default Home
