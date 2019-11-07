import {
  ADD_COMMENT,
  ADD_COMMENTS_TO_STORE,
  REMOVE_ALL_COMMENTS
} from '../actions/actionTypes';

const LOCAL_STORAGE_NAME = 'comments';

const handlers = {
  [ADD_COMMENTS_TO_STORE]: state => {
    const items = localStorage.getItem(LOCAL_STORAGE_NAME);
    return { ...state, entries: (items && JSON.parse(items)) || {} };
  },
  [ADD_COMMENT]: (state, payload) => {
    const comments = localStorage.getItem(LOCAL_STORAGE_NAME);
    const normalComments = (comments && JSON.parse(comments)) || {};

    if (typeof normalComments[payload.id] === 'undefined') {
      normalComments[payload.id] = [payload];
    } else {
      normalComments[payload.id].push(payload);
    }

    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(normalComments));
    return { ...state, entries: normalComments };
  },
  [REMOVE_ALL_COMMENTS]: (state, payload) => {
    const comments = localStorage.getItem(LOCAL_STORAGE_NAME);
    const normalComments = (comments && JSON.parse(comments)) || {};
    delete normalComments[payload];
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(normalComments));
    return { ...state, entries: normalComments };
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
