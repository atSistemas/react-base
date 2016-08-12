const CIRCLE_SIZE = 15;
const STICK_SIZE = 6;
const STICK_WIDTH = 3;

const stationStyle = {
  position: 'absolute',
  width: CIRCLE_SIZE,
  height: CIRCLE_SIZE + STICK_SIZE,
  left: -CIRCLE_SIZE / 2,
  top: -(CIRCLE_SIZE + STICK_SIZE)
};

const stationCircleStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: CIRCLE_SIZE,
  height: CIRCLE_SIZE,
  border: '10px solid #f44336',
  borderRadius: CIRCLE_SIZE,
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
  left: CIRCLE_SIZE / 2 - STICK_WIDTH / 2,
  top: CIRCLE_SIZE,
  width: STICK_WIDTH,
  height: STICK_SIZE,
  backgroundColor: '#f44336',
  boxShadow: '0 0 0 1px white'
};


const stationStickStyle = {
  position: 'absolute',
  left: CIRCLE_SIZE / 2 - STICK_WIDTH / 2,
  top: CIRCLE_SIZE,
  width: STICK_WIDTH,
  height: STICK_SIZE,
  backgroundColor: '#f44336'
};

const stationStickStyleHover = {
  ...stationStickStyle,
  backgroundColor: '#3f51b5'
};

const stationInfoWindowStyle = {
  position: 'absolute',
  left: CIRCLE_SIZE / 2 - STICK_WIDTH / 2,
  top: CIRCLE_SIZE,
  width:'100px',
  height: '80px',
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
  CIRCLE_SIZE, STICK_SIZE,
  stationInfoWindowStyleHover, stationInfoWindowStyle
};