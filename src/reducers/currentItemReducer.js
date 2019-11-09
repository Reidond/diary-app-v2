import { SELECT_ITEM, REMOVE_CURRENT_ITEM } from '../actions/actionTypes';

const handlers = {
  [SELECT_ITEM]: (state, payload) => {
    return { ...state, selectedEntry: payload };
  },
  [REMOVE_CURRENT_ITEM]: state => {
    return { ...state, selectedEntry: null };
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
