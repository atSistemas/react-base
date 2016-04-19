import React, { Component } from 'react';
import { Link } from 'react-router'

class Home extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
      Home!!!!
      Go to <Link to="/list">
        <span>list</span>
      </Link>
      </div>
    )
  }

}

export default Home
