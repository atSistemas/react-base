import { Dispatcher } from 'flux';

const dispatcher = new Dispatcher();

export function register( callback ) {
  return mainDispatcher.register( callback );
}

export function mainDispatcher( actionType, action){
  console.log(actionType);
  dispatcher.dispatch( actionType, action );
}
