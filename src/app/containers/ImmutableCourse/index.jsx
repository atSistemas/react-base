import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { ImmutableRecord, ImmutableList } from './models';

import styles from './styles.css';

export class ImmutableCourse extends Component {

  render () {
    const record = new ImmutableRecord();
    let age = record.get("age");
    return (
      <div className={ styles.ImmutableCourse  }>
      { age }
      </div>
    );
  }
}

export default ImmutableCourse;
