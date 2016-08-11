import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';
import fetchRequiredActions from 'base/shared/FetchData';

import Logo from '../../components/Logo';
import LinkButton from '../../components/LinkButton';

import styles from './styles.css';
import Actions from './actions';

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
    const LogoData = this.props.MainModel;

    return (
      <div className={ styles.Main }>
        <div>
          <Logo
            alt={ LogoData.alt }
            width={ LogoData.width }
            src={ LogoData.src }
          />

          <div>
            <div className={ styles.txt }>Examples</div>
            
            <div className={ styles.buttons }>
              <LinkButton
                location="/calculator"
                value="Simple Redux Calculator"
              />

              <LinkButton
                location="/weatherstations"
                value="GoogleMaps Wheater Stations"
              />
            </div>
          </div>

          <div className={ styles.txt }>
            <div>
              <a href="https://github.com/atSistemas/react-base">
                <img src="assets/images/github.svg" alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default connect(
  (state) => ({ MainModel: state.Main })
)(Main);
