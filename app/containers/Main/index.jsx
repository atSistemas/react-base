import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';

import styles from './styles';
import Logo from 'components/Logo';
import * as LogoActions from './actions';
import fetchRequiredActions from 'shared/FetchData';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  _Main: React.PropTypes.instanceOf(Immutable.Record)
};

export class _Main extends Component {

  static requiredActions = [LogoActions.getLogo];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(LogoActions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(Logo.requiredActions, this.props, '_Main');
  }

  render () {

    const _Main = this.props._Main;
    const logoList = _Main.data.valueSeq().map( logo => {

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

_Main.propTypes = propTypes;


export default connect(
  (state) => ({ _Main: state._Main })
)(_Main);
