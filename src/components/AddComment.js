import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { randomHexColor } from '../utils/randomHexColor';

const AddComment = ({ addComment, currentItemId }) => {
  const [value, setValue] = useState('');

  const handleKeyDown = event => {
    const comment = {
      id: currentItemId,
      avatar: randomHexColor(),
      text: value
    };

    // https://bugs.chromium.org/p/chromium/issues/detail?id=79407
    if ((event.keyCode === 10 || event.keyCode === 13) && event.ctrlKey) {
      addComment(comment);
      setValue('');
    }
  };

  return (
    <form className="w-100">
      <div className="form-row">
        <div className="col-2 pl-4">
          <div className="comment--avatar comment--avatar-main" />
        </div>
        <div className="col-10 pl-2 pr-4">
          <textarea
            className="form-control"
            rows="3"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </form>
  );
};

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  currentItemId: PropTypes.string.isRequired
};

export default AddComment;
