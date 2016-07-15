const K_CIRCLE_SIZE = 15;
const K_STICK_SIZE = 6;
const K_STICK_WIDTH = 3;

const stationStyle = {
  position: 'absolute',
  width: K_CIRCLE_SIZE,
  height: K_CIRCLE_SIZE + K_STICK_SIZE,
  left: -K_CIRCLE_SIZE / 2,
  top: -(K_CIRCLE_SIZE + K_STICK_SIZE)
};

const stationCircleStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: K_CIRCLE_SIZE,
  height: K_CIRCLE_SIZE,
  border: '10px solid #f44336',
  borderRadius: K_CIRCLE_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 12,
  fontWeight: 'bold',
  padding: 0,
  cursor: 'pointer',
  boxShadow: '0 0 0 1px white'
};


const stationCircleStyleHover = {
  ...stationCircleStyle,
  border: '10px solid #FAB10A',
  color: '#f44336'
};

const stationStickStyleShadow = {
  position: 'absolute',
  left: K_CIRCLE_SIZE / 2 - K_STICK_WIDTH / 2,
  top: K_CIRCLE_SIZE,
  width: K_STICK_WIDTH,
  height: K_STICK_SIZE,
  backgroundColor: '#f44336',
  boxShadow: '0 0 0 1px white'
};


const stationStickStyle = {
  position: 'absolute',
  left: K_CIRCLE_SIZE / 2 - K_STICK_WIDTH / 2,
  top: K_CIRCLE_SIZE,
  width: K_STICK_WIDTH,
  height: K_STICK_SIZE,
  backgroundColor: '#f44336'
};

const stationStickStyleHover = {
  ...stationStickStyle,
  backgroundColor: '#3f51b5'
};

const stationInfoWindowStyle = {
  position: 'absolute',
  left: K_CIRCLE_SIZE / 2 - K_STICK_WIDTH / 2,
  top: K_CIRCLE_SIZE,
  width:'200px',
  height: '100px',
  backgroundColor: '#f44336',
  display: 'none'
};

const stationInfoWindowStyleHover = {
  ...stationStickStyle,
  backgroundColor: '#3f51b5',
  display:'block'
};

export {
  stationStyle,
  stationCircleStyle, stationCircleStyleHover,
  stationStickStyle, stationStickStyleHover,stationStickStyleShadow,
  K_CIRCLE_SIZE, K_STICK_SIZE,
  stationInfoWindowStyleHover, stationInfoWindowStyle
};