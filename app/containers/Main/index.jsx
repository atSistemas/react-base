import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';

import styles from './styles.css';
import Logo from 'components/Logo';
import * as Actions from './actions';
import fetchRequiredActions from 'shared/FetchData';
import LinkButton from 'components/LinkButton';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  MainModel: React.PropTypes.instanceOf(Immutable.Record)
};

export class Main extends Component {

  static requiredActions = [Actions.getLogo];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(Main.requiredActions, this.props, 'MainModel');
  }

  render () {
    const MainModel = this.props.MainModel;
    const logoList = MainModel.data.valueSeq().map( logo => {

      return (<Logo
        logo={ logo }
        key={ logo.get('id') }
      />);

    });

    return (
      <div className={ styles.Main }>
       { logoList }
        <LinkButton location="/calculator" value="Simple Redux Calculator" />

      </div>
    );
  }

}

Main.propTypes = propTypes;


export default connect(
  (state) => ({ MainModel: state.Main })
)(Main);
