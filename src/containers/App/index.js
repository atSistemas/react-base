import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import ReactBaseLogo from '../../components/Logo'

function App({ pushPath, children }) {
  return (
    <div>

      <ReactBaseLogo />

      <main>
        {children}
      </main>

    </div>

  );
};

export default connect(null)(App)
