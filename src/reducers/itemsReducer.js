import {
  ADD_ITEMS_TO_STORE,
  ADD_ITEM,
  REMOVE_ITEM,
  SELECT_ITEM,
  LOAD_ITEM,
  REMOVE_CURRENT_ITEM,
  ADD_COMMENT
} from '../actions/actionTypes';
import { pushToLocalStorage } from '../helpers/pushToLocalStorage';
import { filterFromLocalStorage } from '../helpers/filterFromLocalStorage';

const LOCAL_STORAGE_NAME = 'items';
const CURRENT_ITEM_LS_NAME = 'current-item';

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
  [SELECT_ITEM]: (state, payload) => {
    localStorage.setItem(CURRENT_ITEM_LS_NAME, JSON.stringify(payload));
    return { ...state, selectedEntry: payload };
  },
  [LOAD_ITEM]: state => {
    const item = localStorage.getItem(CURRENT_ITEM_LS_NAME);
    return { ...state, selectedEntry: (item && JSON.parse(item)) || {} };
  },
  [REMOVE_CURRENT_ITEM]: state => {
    localStorage.setItem(CURRENT_ITEM_LS_NAME, null);
    return { ...state, selectedEntry: null };
  },
  [ADD_COMMENT]: (state, payload) => {
    const item = localStorage.getItem(CURRENT_ITEM_LS_NAME);
    const normalItem = (item && JSON.parse(item)) || {};
    // eslint-disable-next-line no-unused-expressions
    normalItem?.comments?.push(payload);
    localStorage.setItem(CURRENT_ITEM_LS_NAME, JSON.stringify(normalItem));
    return { ...state, selectedEntry: normalItem };
  },
  DEFAULT: state => state
};

const initialState = {
  selectedEntry: {},
  entries: []
};

export default function itemsReducer(state = initialState, action) {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
}
