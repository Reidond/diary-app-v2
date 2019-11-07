import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Item = ({
  item,
  removeItem,
  selectItem,
  currentItem,
  removeCurrentItem
}) => {
  const handleButtonClick = id => {
    if (id === currentItem.id) {
      removeCurrentItem();
    }

    removeItem(id);
  };

  const handleItemClick = localItem => selectItem(localItem);

  const [isActiveClass, setIsActiveClass] = useState('col-12');

  useEffect(() => {
    if (item?.id === currentItem?.id) {
      setIsActiveClass('col-12 right-view--active');
    } else {
      setIsActiveClass('col-12');
    }
  }, [currentItem, item]);

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
            <div className="p-3 font-weight-bold">{item.title}</div>
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

export default Item;
