import React, { Component } from 'react';
import { PropTypes, shape } from 'prop-types';

class ComponentLifeCycle extends Component {

  constructor(props) {
    super(props);
    console.log(111111);
  }

  componentWillMount() {
    console.log(22222222);
  }

  componentDidMount() {
    console.log(33333333);
  }

  render() {
    return (
      <div>
        Life Cicle Events
      </div>
    );
  }
}

ComponentLifeCycle.defaultProps ={
  myProp: 111,
};

ComponentLifeCycle.getInitialState = {
  name: 'Jhon'
};


export default ComponentLifeCycle;
