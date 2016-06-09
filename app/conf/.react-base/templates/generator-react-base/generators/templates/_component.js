import React, { PropTypes } from 'react';
import styles from './styles.css';

const <%= name %>Component = ({id}) => {

  return (
    <div key={ id } className={ styles.<%= name %> } ><%= name %> component</div>
  );
};

<%= name %>Component.propTypes= {
  id: PropTypes.number.isRequired
};

export default <%= name %>Component;
