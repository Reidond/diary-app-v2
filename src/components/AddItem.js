import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'node-uuid';

const AddItem = ({ addItem }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const item = {
      id: v4(),
      title: value,
      isActive: false
    };

    addItem(item);

    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-9 d-flex flex-grow-1 pl-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type name here..."
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary w-100 text-white">
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
