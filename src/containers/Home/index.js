import React, { Component } from 'react';
import { Link } from 'react-router'

class Home extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
      Home!!!
      Go to 
        <Link to="/list/news">
          <span>list</span>
        </Link>
      </div>
    )
  }

}
Home.displayName = 'Home'

export default Home
