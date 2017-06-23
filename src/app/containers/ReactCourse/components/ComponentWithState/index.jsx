import React, { Component } from 'react';

class ComponentWithState extends Component {

  constructor(props) {
    super(props);
    this.state = { foo: 'bye', age: 78 };
  }

  updateState(data) {
    this.setState(data);
  }

  render() {
    return (
      <div>
       From local state: { this.state.foo }
       { this.state.age }
         <span onClick={ function(){
           this.state.foo = 'aaaa';
           //this.updateState({foo:'eoo'})
           }.bind(this)
           
            } >click </span>
      </div>
    );
  }
}

export default ComponentWithState;
