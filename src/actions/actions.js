import Constants from '../constants/'
import {mainDispatcher, register} from '../dispatchers/dispatcher.js'

export default {

  addItem ( item ) {
    mainDispatcher({
      actionType: Constants.ADD_ITEM,
      data: item
    });
  },

  removeItem ( item ) {
    mainDispatcher({
      actionType: Constants.REMOVE_ITEM,
      data: item
    });
  }

}
