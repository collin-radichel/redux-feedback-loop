import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import Success from '../Success/Success'


// App is filled with Routes to different views
// in this Application
function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
      </header>
      <main>
      <Route exact path ="/">
        <Feeling />
      </Route>
      <Route path ="/understanding">
        <Understanding />
      </Route>
      <Route path ="/support">
        <Support />
      </Route>
      <Route path ="/comments">
        <Comments />
      </Route>
      <Route path ="/review">
        <Review />
      </Route>
      <Route path ="/success">
        <Success />
      </Route>
      </main>
    </div>
    </Router>
  );
}

export default App;
