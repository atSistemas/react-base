import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';

import styles from './styles';
import * as Actions from './actions';
import fetchRequiredActions from 'shared/FetchData';

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

    const <%= name %> = this.props.<%= name  %>;
    console.log(<%= name %> );
    return (
      <div className={ styles.<%= name %>  }>
        Hello <%= name %> Container !
      </div>
    );
  }

}

<%= name %>.propTypes = propTypes;


export default connect(
  (state) => ({ <%= name %>: state.<%= name %> })
)(<%= name %>);
