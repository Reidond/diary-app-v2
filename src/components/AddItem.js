import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { generateID } from '../utils/generateID';

const AddItem = ({ addItem }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const item = {
      id: generateID(),
      title: value,
      comments: [],
      isActive: false
    };

    addItem(item);

    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-10 d-flex flex-grow-1 pl-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type name here..."
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary">
            Add new
          </button>
        </div>
      </div>
    </form>
  );
};

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default AddItem;
