import React from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100 fixed-top">
        <div className="col-3 hidden-md-down left-side">
          <LeftSide />
        </div>
        <div className="col-9 col-sm-10 col-md-10 col-lg-8 col-xl-8">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
