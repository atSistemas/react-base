import React from 'react'
import { Link } from 'react-router'
import ReactBaseLogo from '../../components/Logo'

function Header() {

  return (
    <header>
      <Link to="/">
        <ReactBaseLogo />
      </Link>
    </header>
  )

}

export default Header
