import React, { PropTypes } from 'react'

const Row = ({ id, title, removed = false ,  onClick }) => {

var action = removed ? 'active' : 'remove'
  return (
    <li key={ id }>
      <a href="#"
        onClick={e => {
        e.preventDefault()
        onClick()
        }}>
        click to {action}
      </a>
    <span>   {title}  </span>
    </li>
  )
}

Row.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  removed: PropTypes.bool
}

export default Row
