import {
  SELECT_ITEM,
  LOAD_ITEM,
  REMOVE_CURRENT_ITEM,
  ADD_COMMENT
} from '../actions/actionTypes';

const LOCAL_STORAGE_NAME = 'current-item';

const handlers = {
  [SELECT_ITEM]: (state, payload) => {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(payload));
    return { ...state, selectedEntry: payload };
  },
  [LOAD_ITEM]: state => {
    const item = localStorage.getItem(LOCAL_STORAGE_NAME);
    return { ...state, selectedEntry: (item && JSON.parse(item)) || {} };
  },
  [REMOVE_CURRENT_ITEM]: state => {
    localStorage.setItem(LOCAL_STORAGE_NAME, null);
    return { ...state, selectedEntry: null };
  },
  [ADD_COMMENT]: (state, payload) => {
    const item = localStorage.getItem(LOCAL_STORAGE_NAME);
    const normalItem = (item && JSON.parse(item)) || {};
    // eslint-disable-next-line no-unused-expressions
    normalItem?.comments?.push(payload);
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(normalItem));
    return { ...state, selectedEntry: normalItem };
  },
  DEFAULT: state => state
};

const initialState = {
  selectedEntry: {}
};

export default function currentItemReducer(state = initialState, action) {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
}
