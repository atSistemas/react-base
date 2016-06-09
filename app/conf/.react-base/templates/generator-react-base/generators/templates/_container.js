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
  <%= nameState %>: React.PropTypes.instanceOf(Immutable.Record)
};

export class <%= nameGenerator %> extends Component {

  static requiredActions = [Actions.get<%= namePascal %>];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(<%= namePascal %>.requiredActions, this.props, '<%= nameState %>');
  }

  render () {

    const <%= nameState %> = this.props.<%= nameState %>;
    const logoList = <%= nameState %>.data.valueSeq().map( logo => {

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

<%= nameGenerator %>.propTypes = propTypes;


export default connect(
  (state) => ({ <%= nameState %>: state.<%= nameState %> })
)(<%= nameGenerator %>);
