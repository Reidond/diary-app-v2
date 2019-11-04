import React from 'react';
import LeftSide from './components/left-side/LeftSide';
import RightSide from './components/right-side/RightSide';

function App() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100 fixed-top">
        <div className="col-3 hidden-md-down left-side">
          <LeftSide />
        </div>
        <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
