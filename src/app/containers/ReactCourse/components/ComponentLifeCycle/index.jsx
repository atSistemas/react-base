import React, { Component } from 'react';
import { PropTypes, shape } from 'prop-types';

class ComponentLifeCycle extends Component {

  constructor(props) {
    super(props);
    console.log(777777);
  }

  componentWillMount() {
    console.log(111111);
  }

  componentDidMount() {
    console.log(22222);
  }

  render() {
    console.log(3343);
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
