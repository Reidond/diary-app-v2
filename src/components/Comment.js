import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  return (
    <div className="w-100 comment--item">
      <div className="form-row">
        <div className="col-2 pl-4">
          <div
            className="comment--avatar"
            style={{ background: comment.avatar }}
          />
        </div>
        <div className="col-10 pl-2 pr-4">
          <div>{comment.text}</div>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Comment;
