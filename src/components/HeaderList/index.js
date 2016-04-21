import React from 'react'
import FilterListLink from '../../containers/FilterListLink'

const HeaderList = () => (
  <p>
    Show:
    {" "}   
    <FilterListLink filter="SHOW_ACTIVE">
      Active
    </FilterListLink>
    {", "}
    <FilterListLink filter="SHOW_REMOVED">
      Removed 
    </FilterListLink>   
    {", "}  
    <FilterListLink filter="SHOW_ALL">
      All
    </FilterListLink>
  </p>
)

export default HeaderList