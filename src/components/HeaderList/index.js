import React from 'react';
import FilterListLink from '../../containers/FilterListLink';
import types from '../../types';

const HeaderList = () => (
  <p>
    Show:
    { " " }
    <FilterListLink filter={ types.SHOW_ACTIVE }>
      Active Items
    </FilterListLink>
    { ", " }
    <FilterListLink filter={ types.SHOW_REMOVED }>
      Removed Items
    </FilterListLink>
    { ", " }
    <FilterListLink filter={ types.SHOW_ALL }>
      All Items
    </FilterListLink>
  </p>
);

export default HeaderList;
