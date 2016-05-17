import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'

function App({ children }) {
  return (
    <div>
      <Header />
      <main>
        { children }
      </main>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default connect(null)(App)
