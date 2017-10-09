import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import router from './router.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        {router}
      </div>
    );
  }
}

export default App;
