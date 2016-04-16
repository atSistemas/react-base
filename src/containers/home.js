import React, { Component } from 'react';
import { Link } from 'react-router'

class Home extends Component {

  render() {
    return (
      <div>
      Home!!
      Go to <Link to="/list">
        <span>list</span>
      </Link>
      </div>
    )
  }

}

export default Home
