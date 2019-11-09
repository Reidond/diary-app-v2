import { ADD_COMMENT, REMOVE_ALL_COMMENTS } from '../actions/actionTypes';

const handlers = {
  [ADD_COMMENT]: (state, payload) => {
    const normalComments = { ...state.entries };

    if (typeof normalComments[payload.id] === 'undefined') {
      normalComments[payload.id] = [payload];
    } else {
      normalComments[payload.id].push(payload);
    }

    return { ...state, entries: normalComments };
  },
  [REMOVE_ALL_COMMENTS]: (state, payload) => {
    const normalComments = { ...state.entries };
    delete normalComments[payload];
    return {
      ...state,
      entries: normalComments
    };
  },
  DEFAULT: state => state
};

const initialState = {
  entries: {}
};

export default function commentsReducer(state = initialState, action) {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
}
