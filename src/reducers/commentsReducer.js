const handlers = {
  DEFAULT: state => state
};

export default function commentsReducer(state = [], action) {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}
