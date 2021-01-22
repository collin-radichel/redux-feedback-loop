import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button'
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <Button variant="contained" color="primary">Don't forget it!</Button>
      </header>
    </div>
  );
}

export default App;
