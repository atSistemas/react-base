
import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  addNewItem: PropTypes.func.isRequired
};

const getValue = () => {
  return document.querySelector("#newItem").value;
}

const NewItem =({ addNewItem }) => (
  <div>
    <input id="newItem" type="text" name="newItem" />
    <span onClick={ () => addNewItem(getValue()) }>add</span>
  </div>
);

export default NewItem;