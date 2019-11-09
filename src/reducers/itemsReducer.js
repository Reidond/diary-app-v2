import { ADD_ITEM, REMOVE_ITEM } from '../actions/actionTypes';

const handlers = {
  [ADD_ITEM]: (state, payload) => {
    return { ...state, entries: [...state.entries, payload] };
  },
  [REMOVE_ITEM]: (state, payload) => {
    const localItems = state.entries.filter(item => item.id !== payload);
    return { ...state, entries: localItems };
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
