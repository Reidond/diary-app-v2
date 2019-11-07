import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Item = ({
  item,
  removeItem,
  selectItem,
  currentItem,
  removeCurrentItem,
  comments,
  removeAllComments
}) => {
  const handleButtonClick = id => {
    if (id === currentItem.id) {
      removeCurrentItem();
    }

    removeAllComments(id);
    removeItem(id);
  };

  const handleItemClick = localItem => selectItem(localItem);

  const [localComments, setLocalComments] = useState([]);

  const [isActiveClass, setIsActiveClass] = useState('col-12');

  useEffect(() => {
    if (item?.id === currentItem?.id) {
      setIsActiveClass('col-12 right-view--active');
    } else {
      setIsActiveClass('col-12');
    }
  }, [currentItem, item]);

  useEffect(() => {
    setLocalComments(comments[item.id]);
  }, [comments, item.id]);

  return (
    <div className={isActiveClass}>
      <div className="right-view--item">
        <div className="row d-flex align-items-center">
          <div
            className="col-10"
            onClick={handleItemClick.bind(null, item)}
            onKeyDown={handleItemClick.bind(null, item)}
            role="button"
            tabIndex="-1"
          >
            <div className="p-3 font-weight-bold">
              {item.title}{' '}
              <span className="badge badge-pill badge-primary">
                {localComments?.length}
              </span>
            </div>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleButtonClick.bind(null, item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  removeCurrentItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  comments: state.comments.entries
});

export default connect(
  mapStateToProps,
  null
)(Item);
