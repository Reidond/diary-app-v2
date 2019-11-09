import React from 'react';
import { connect } from 'react-redux';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  SELECT_ITEM,
  REMOVE_CURRENT_ITEM,
  REMOVE_ALL_COMMENTS
} from '../actions/actionTypes';
import AddItem from './AddItem';
import Item from './Item';

const Items = ({
  addItem,
  removeItem,
  items,
  currentItem,
  selectItem,
  removeCurrentItem,
  removeAllComments
}) => {
  return (
    <div className="card shadow-sm bg-white rounded">
      <div className="card-body">
        <h2 className="card-title right-view--title pb-3">Items</h2>
        <AddItem addItem={addItem} />
        <div className="row pt-3">
          {items.map(item => (
            <Item
              currentItem={currentItem}
              item={item}
              removeItem={removeItem}
              removeCurrentItem={removeCurrentItem}
              removeAllComments={removeAllComments}
              selectItem={selectItem}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.items.entries,
  currentItem: state.currentItem.selectedEntry
});

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch({ type: ADD_ITEM, payload: item }),
    removeItem: id => dispatch({ type: REMOVE_ITEM, payload: id }),
    selectItem: item => dispatch({ type: SELECT_ITEM, payload: item }),
    removeCurrentItem: () => dispatch({ type: REMOVE_CURRENT_ITEM }),
    removeAllComments: id =>
      dispatch({ type: REMOVE_ALL_COMMENTS, payload: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
