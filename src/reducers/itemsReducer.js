import {
  ADD_ITEMS_TO_STORE,
  ADD_ITEM,
  REMOVE_ITEM
} from '../actions/actionTypes';
import { pushToLocalStorage } from '../helpers/pushToLocalStorage';
import { filterFromLocalStorage } from '../helpers/filterFromLocalStorage';

const LOCAL_STORAGE_NAME = 'items';

const handlers = {
  [ADD_ITEM]: (state, payload) => {
    const localItems = pushToLocalStorage(LOCAL_STORAGE_NAME, payload);
    return { ...state, entries: localItems };
  },
  [REMOVE_ITEM]: (state, payload) => {
    const localItems = filterFromLocalStorage(LOCAL_STORAGE_NAME, payload);
    return { ...state, entries: localItems };
  },
  [ADD_ITEMS_TO_STORE]: state => {
    const items = localStorage.getItem(LOCAL_STORAGE_NAME);
    return { ...state, entries: (items && JSON.parse(items)) || [] };
  },
  DEFAULT: state => state
};

const initialState = {
  entries: []
};

export default function itemsReducer(state = initialState, action) {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
}
