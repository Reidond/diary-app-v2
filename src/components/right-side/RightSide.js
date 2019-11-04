import React from 'react';
import Items from './Items';
import Comments from './Comments';

const RightSide = () => (
  <div className="container-fluid p-4">
    <div className="row">
      <div className="col-6">
        <Items />
      </div>
      <div className="col-6">
        <Comments />
      </div>
    </div>
  </div>
);

export default RightSide;
