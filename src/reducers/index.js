import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  items: itemsReducer,
  comments: commentsReducer
});
