import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';

import * as Actions from './actions';
import fetchRequiredActions from 'shared/FetchData';
import <%= name %>Component from './component/';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  <%= name %>: React.PropTypes.instanceOf(Immutable.Record)
};

export class <%= name %> extends Component {

  static requiredActions = [Actions.get<%= name %>];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(<%= name %>.requiredActions, this.props, '<%= name %>');
  }

  render () {
    let props = this.props.<%= name  %>; 

    props.name = '<%= name  %>';

    return (
      <<%= name %>Component name={ props.name } />
    );
  }

}

<%= name %>.propTypes = propTypes;


export default connect(
  (state) => ({ <%= name %>: state.<%= name %> })
)(<%= name %>);
