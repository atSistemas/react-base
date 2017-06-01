import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { fetchRequiredActions } from 'base';

import * as Actions from './actions';
import TestingExercisesComponent from './components/';
import styles from './styles.css';

/* eslint  react/require-default-props: 0 */

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  TestingExercisesModel: PropTypes.instanceOf(Immutable.Record)
};

export class TestingExercises extends Component {

  static requiredActions = [Actions.getTestingExercises];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(TestingExercises.requiredActions, this.props, 'TestingExercisesModel');
  }

  render () {
    let props = this.props.TestingExercisesModel; 

    props.name = 'TestingExercises';

    return (
      <div className={ styles.TestingExercises  }>
        <TestingExercisesComponent name={ props.name } />
      </div>
    );
  }

}

TestingExercises.propTypes = propTypes;


export default connect(
  (state) => ({ TestingExercisesModel: state.TestingExercises })
)(TestingExercises);
