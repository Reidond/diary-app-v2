import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import currentItemReducer from './currentItemReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  items: itemsReducer,
  currentItem: currentItemReducer,
  comments: commentsReducer
});
