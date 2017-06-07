const counterReducer = (state = {counter: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      const currentValue = state.counter;
      const incrementValue = action.payload.num;
      return {
        ...state,
        counter: currentValue + incrementValue
      };
    }
    case 'DECREMENT': {
      const currentValue = state.counter;
      const decrementValue = action.payload.num;
      const nextValue = currentValue - decrementValue;
      return Object.assign({}, state, { counter: nextValue }) ;
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
