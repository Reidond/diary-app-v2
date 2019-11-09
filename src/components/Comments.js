import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import NoComments from './NoComments';
import AddComment from './AddComment';
import NoCurrentItem from './NoCurrentItem';
import { ADD_COMMENT } from '../actions/actionTypes';

const Comments = ({ currentItem, addComment, comments }) => {
  const isItemNullOrEmpty =
    !currentItem || Object.keys(currentItem).length === 0;

  const [currentItemComments, setCurrentItemComments] = useState([]);

  useEffect(() => {
    setCurrentItemComments(comments[(currentItem?.id)]);
  }, [comments, currentItem, currentItemComments]);

  return (
    <div className="card shadow-sm bg-white rounded">
      <div className="card-body">
        <h2 className="card-title right-view--title">
          Comments{' '}
          {isItemNullOrEmpty ? null : `#${currentItem.id.split('-')[0]}`}
        </h2>
        {isItemNullOrEmpty ? (
          <NoCurrentItem />
        ) : (
          <div className="card-text">
            <div className="row pt-2">
              {!currentItemComments?.length ? (
                <NoComments />
              ) : (
                currentItemComments.map((comment, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={comment.id + i} className="pt-5 col-12 p-0">
                    <Comment comment={comment} />
                  </div>
                ))
              )}
            </div>
            {currentItem && Object.keys(currentItem).length > 0 ? (
              <div className="row pt-5">
                <AddComment
                  addComment={addComment}
                  currentItemId={currentItem.id}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentItem: state.currentItem.selectedEntry,
  comments: state.comments.entries
});

const mapDispatchToProps = dispatch => {
  return {
    addComment: comment => dispatch({ type: ADD_COMMENT, payload: comment })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
