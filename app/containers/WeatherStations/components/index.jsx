import React, { PropTypes } from 'react';

const propTypes= {
  name: PropTypes.string.isRequired
};

const WeatherStations = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

WeatherStations.propTypes = propTypes;

export default WeatherStations;
