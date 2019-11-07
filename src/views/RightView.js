import React from 'react';
import '../scss/RightView.scss';
import Items from '../components/Items';
import Comments from '../components/Comments';

const RightView = () => (
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

export default RightView;
