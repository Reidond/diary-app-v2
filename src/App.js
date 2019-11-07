import React from 'react';
import LeftView from './views/LeftView';
import RightView from './views/RightView';

function App() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100 fixed-top">
        <div className="col-3 hidden-md-down left-view">
          <LeftView />
        </div>
        <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
          <RightView />
        </div>
      </div>
    </div>
  );
}

export default App;
