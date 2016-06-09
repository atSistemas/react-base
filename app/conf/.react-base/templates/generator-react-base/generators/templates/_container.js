import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';

import styles from './styles';
import Logo from 'components/Logo';
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
    const logoList = <%= name %>.data.valueSeq().map( logo => {

      return (<Logo
        logo={ logo }
        key={ logo.get('id') }
      />);

    });

    return (
      <div className={styles.Main}>
       { logoList }
      </div>
    );
  }

}

<%= name %>.propTypes = propTypes;


export default connect(
  (state) => ({ <%= name %>: state.<%= name %> })
)(<%= name %>);
