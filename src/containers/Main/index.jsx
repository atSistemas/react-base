import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';

import styles from './styles';
import Logo from '../../components/Logo';
import * as LogoActions from '../../actions/Logo';
import fetchRequiredActions from '../../shared/fetch-data';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  logo: React.PropTypes.instanceOf(Immutable.Record)
};

export class Main extends Component {

  static requiredActions = [LogoActions.getLogo];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(LogoActions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(Logo.requiredActions, this.props, 'logo');
  }

  render () {

    const logo = this.props.logo;
    const logoList = logo.data.valueSeq().map( logo => {

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

Main.propTypes = propTypes;


export default connect(
  (state) => ({ logo: state.logo })
)(Main);
