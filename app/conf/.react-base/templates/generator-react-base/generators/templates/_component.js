import React, { PropTypes } from 'react';
import styles from './styles.css';

const <%= name %> = ({ name }) => {

  return (
    <div className={ styles.<%= name %>  }>
      Hello { name } Container !
    </div>
  );
};

<%= name %>.propTypes= {
  name: PropTypes.string.isRequired
};

export default <%= name %>;
