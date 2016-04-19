import React, { PropTypes } from 'react'

const Row = ({ id, title, onClick }) => {

    return (
      <li key={ id }>
      <a href="#"
        onClick={e => {
          e.preventDefault()
          onClick()
        }}
     >
       {title}
     </a>
      </li>
    )
}

Row.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Row
