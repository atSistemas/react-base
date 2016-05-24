import React, { Component, PropTypes } from 'react'

const Row = ({ item,  onClick }) => {
  const removed = false
  const id = item.id
  const title = item.title

  let imageStyle = {
    height: '20px',
    width: '20px',
    marginLeft: '30px',
    marginTop:'15px',
    marginRight:'15px'
  }

  let imageRowStyle = {
    width: '380px',
  }

  let spanStyle = {
    height: '50px',
    width: '330px',
    float:'left',
    marginTop:'10px'
  }

  let spanStyle2 ={
    height: '50px',
    width: '50px',
    float:'left'
  }

  let rowStyle ={
    width: '400px',
    height: '260px',
    margin:'10px 10px 10px 10px',
    borderBottom: '1px dotted #ff0000'
  }

  let action = removed ? 'add' : 'remove'
  let imageUrl = '/assets/images/' + action + '.jpg'
  let imageRow = '/assets/images/imagetest' + id % 10 + '.jpg'

  return (
    <li key={ id } style={ rowStyle }>

      <img style={ imageRowStyle } alt={ id } src={ imageRow } />

      <span style={ spanStyle }>   { title }  </span>
      <span style={ spanStyle2 }>
        <a
          href=""
          onClick={
            e => {
              e.preventDefault()
              onClick()
            }
          }
        >
          <img style={ imageStyle } alt="icon" src={ imageUrl } />
        </a>
      </span>
    </li>
  )
}

Row.propTypes = {
  onClick: PropTypes.func.isRequired,
  removed: PropTypes.bool
}

export default Row
