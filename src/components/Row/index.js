import React from 'react'

let Row = ({ id, title }) => {

    return (
      <li key={ id }>
         <p>{ title }</p>
      </li>
    )
}

export default Row
