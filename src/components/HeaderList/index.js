import React from 'react'
import FilterListLink from '../../containers/FilterListLink'

const HeaderList = () => (
  <p>
    Show:
    { " " }
    <FilterListLink filter="SHOW_ACTIVE">
      Active Items
    </FilterListLink>
    { ", " }
    <FilterListLink filter="SHOW_REMOVED">
      Removed Items
    </FilterListLink>
    { ", " }
    <FilterListLink filter="SHOW_ALL">
      All Items
    </FilterListLink>
  </p>
)

export default HeaderList
