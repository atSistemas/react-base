import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';

import Logo from 'components/Logo';
import fetchRequiredActions from 'shared/FetchData';

import styles from './styles.css';
import  Actions from './actions';

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
      </div>
    );
  }

}

Main.propTypes = propTypes;


export default connect(
  (state) => ({ MainModel: state.Main })
)(Main);
