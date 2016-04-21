import React, { PropTypes } from 'react'

const Row = ({ id, title, removed,  onClick }) => {

    var action = removed ? 'active' :'remove'
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
  removed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Row
