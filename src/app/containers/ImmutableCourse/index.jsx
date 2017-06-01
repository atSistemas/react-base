import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { fetchRequiredActions } from 'base';

import * as Actions from './actions';
import ImmutableCourseComponent from './components/';
import styles from './styles.css';

/* eslint  react/require-default-props: 0 */

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  ImmutableCourseModel: PropTypes.instanceOf(Immutable.Record)
};

export class ImmutableCourse extends Component {

  static requiredActions = [Actions.getImmutableCourse];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(ImmutableCourse.requiredActions, this.props, 'ImmutableCourseModel');
  }

  render () {
    let props = this.props.ImmutableCourseModel; 

    props.name = 'ImmutableCourse';

    return (
      <div className={ styles.ImmutableCourse  }>
        <ImmutableCourseComponent name={ props.name } />
      </div>
    );
  }

}

ImmutableCourse.propTypes = propTypes;


export default connect(
  (state) => ({ ImmutableCourseModel: state.ImmutableCourse })
)(ImmutableCourse);
