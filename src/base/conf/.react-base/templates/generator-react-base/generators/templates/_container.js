import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { fetchRequiredActions } from 'base';

import * as Actions from './actions';
import <%= name %>Component from './components/';
import styles from './styles.css';

/* eslint  react/require-default-props: 0 */

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  <%= name %>Model: PropTypes.instanceOf(Immutable.Record)
};

export class <%= name %> extends Component {

  static requiredActions = [Actions.get<%= name %>];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(<%= name %>.requiredActions, this.props, '<%= name %>Model');
  }

  render () {
    let props = this.props.<%= name  %>Model; 

    props.name = '<%= name  %>';

    return (
      <div className={ styles.<%= name %>  }>
        <<%= name %>Component name={ props.name } />
      </div>
    );
  }

}

<%= name %>.propTypes = propTypes;


export default connect(
  (state) => ({ <%= name %>Model: state.<%= name %> })
)(<%= name %>);
