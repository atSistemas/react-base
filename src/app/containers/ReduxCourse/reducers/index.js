import ActionTypes from '../actionTypes'; 
import { ReduxCourse } from '../models';
import { createReducer } from 'base';

function sum(state, action) {
  const num1 = action.payload.num;
  const num2 = action.payload.num2;
  return state.set('sum', num1 + num2);
}

function increment(state, action) {
  const currentValue = state.get('counter');
  const incrementValue = action.payload.num;
  return state
    .set('counter', currentValue + incrementValue)
    .setIn(['anotherProp','other','eo'], false); 
}

function decrement(state, action) {
  const currentValue = state.get('counter');
  const decrementValue = action.payload.num;
  return state.set('counter', currentValue - decrementValue); 
}

const actionHandlers = {
  [ActionTypes.SUM] : sum,
  [ActionTypes.INCREMENT] : increment, 
  [ActionTypes.DECREMENT] : decrement
};

export default createReducer(actionHandlers, new ReduxCourse());

/*

const counterReducer = (state = new ReduxCourse(), action) => {
  switch (action.type) {
    case 'SUM': {
      const num1 = action.payload.num;
      const num2 = action.payload.num2;
      return state.set('sum', num1 + num2);
    }
    case 'INCREMENT': {
      const currentValue = state.get('counter');
      const incrementValue = action.payload.num;
      return state
      .set('counter', currentValue + incrementValue)
      .setIn(['anotherProp','other','eo'], false);
    }
    case 'DECREMENT': {
      const currentValue = state.get('counter');
      const decrementValue = action.payload.num;
      return state.set('counter', currentValue - decrementValue);
    }

    case 'DATA_REQUEST': {
      console.log('reeeeeequest');
      return state;
    }

    case 'DATA_SUCCESS': {
      console.log('successssss');
      //return state.set('data', action.payload);
    }

    default: {
      return state;
    }
  }
};

export default counterReducer;*/
