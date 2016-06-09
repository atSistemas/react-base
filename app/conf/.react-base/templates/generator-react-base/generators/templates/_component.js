import React, { PropTypes } from 'react';
import styles from './styles.css';

const <%= namePascal %>Component = ({id}) => {

  return (
    <div key={ id } className={ styles.<%= name %> } ><%= namePascal %> component</div>
  );
};

<%= namePascal %>Component.propTypes= {
  id: PropTypes.number.isRequired
};

export default <%= namePascal %>Component;
