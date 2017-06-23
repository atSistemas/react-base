import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ComunicatingComponents extends Component {

  constructor(props) {
    super(props);
    this.state = { parent: 'parent Data' };
    //this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (data) => {
    this.setState({parent: data});
  }

  render() {
    return (
      <div>
         <ChildComponent
          parentData={ this.state.parent }
          parentFunction={ this.clickHandler }
          />
      </div>
    );
  }
}

export default ComunicatingComponents;
