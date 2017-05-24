import React, { Component } from 'react';

class ComponentWithState extends Component {

  constructor(props) {
    super(props);
    this.state = { foo: 'fooo' };
  }

  render() {
    return (
      <div>
       From local state: { this.state.foo }
      </div>
    );
  }
}

export default ComponentWithState;
