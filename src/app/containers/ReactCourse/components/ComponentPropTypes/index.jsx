import React, { Component } from 'react';
import { PropTypes, shape } from 'prop-types';
  
class ComponentPropTypes extends Component {

  static propTypes = {
    myProp: PropTypes.string.isRequired,
    myObj: shape({
      id: PropTypes.number.isRequired,
      numbers: PropTypes.arrayOf(PropTypes.number),
    }).isRequired
  }

  constructor(props) {
    super(props);
    console.log(this.props);

  }

  render() {
    return (
      <div>
        <ul>
          <li> myProp value: { this.props.myProp } </li>
          <li> obj value: { this.props.myObj.id } </li>
        </ul>
      </div>
    );
  }
}

export default ComponentPropTypes;
