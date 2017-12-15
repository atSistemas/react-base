import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import * as Actions from './actions';
import <%= name %>Component from './components/';
import styles from './styles.css';

class <%= name %> extends Component {
  
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    <%= name %>Model: PropTypes.instanceOf(Immutable.Record)
  };
  
  static requiredActions = [];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  render () {
    const { <%= name  %>Model } = this.props;

    return (
      <div className={ styles.<%= name %>  }>
        <<%= name %>Component name={ <%= name  %>Model.name } />
      </div>
    );
  }
}

export default connect(state => ({
  <%= name %>Model: state.<%= name %> 
}))(<%= name %>);