import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { fetchRequiredActions } from 'base';

import * as Actions from './actions';
import ImmutableExercisesComponent from './components/';
import styles from './styles.css';

/* eslint  react/require-default-props: 0 */

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  ImmutableExercisesModel: PropTypes.instanceOf(Immutable.Record)
};

export class ImmutableExercises extends Component {

  static requiredActions = [Actions.getImmutableExercises];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(ImmutableExercises.requiredActions, this.props, 'ImmutableExercisesModel');
  }

  render () {
    let props = this.props.ImmutableExercisesModel; 

    props.name = 'ImmutableExercises';

    return (
      <div className={ styles.ImmutableExercises  }>
        <ImmutableExercisesComponent name={ props.name } />
      </div>
    );
  }

}

ImmutableExercises.propTypes = propTypes;


export default connect(
  (state) => ({ ImmutableExercisesModel: state.ImmutableExercises })
)(ImmutableExercises);
