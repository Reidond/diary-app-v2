import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import NoComments from './NoComments';
import AddComment from './AddComment';
import NoCurrentItem from './NoCurrentItem';
import { ADD_COMMENT } from '../actions/actionTypes';

const Comments = ({ currentItem, addComment }) => {
  return (
    <div className="card shadow-sm bg-white rounded">
      <div className="card-body">
        <h2 className="card-title right-view--title">Comments</h2>
        {!currentItem || Object.keys(currentItem).length === 0 ? (
          <NoCurrentItem />
        ) : (
          <div className="card-text">
            <div className="row pt-2">
              {!currentItem?.comments?.length ? (
                <NoComments />
              ) : (
                currentItem.comments?.map(comment => (
                  <div className="pt-5 col-12 p-0">
                    <Comment key={comment.id} comment={comment} />
                  </div>
                ))
              )}
            </div>
            {currentItem && Object.keys(currentItem).length > 0 ? (
              <div className="row pt-5">
                <AddComment addComment={addComment} />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentItem: state.items.selectedEntry
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
