import React from 'react'
import Header from './Header'
import Multi from './Multi'
import Interpolate from './Interpolate'
import ManySprings from './ManySprings'
import LearnContext from "./LearnContext";




function App() {

  return (
    <div className="App" style={{overflow:'hidden'}}>
      <header className="App-header">
        {/* <Header/> */}
        {/* <Multi/> */}
        {/* <Interpolate/> */}
        {/* <ManySprings/> */}
        <LearnContext/>
      </header>
    </div>
  );
}

export default App;
