import React from 'react';
import Topbar from './Component/Topbar/Topbar';
import Sidebar from './Component/Sidebar/Sidebar';
import Home from './Pages/Home/Home';

import "./app.css"
function App() {
  return (
    <div className="App">
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Home />
        </div>

      </>
    </div>
  );
}

export default App;
