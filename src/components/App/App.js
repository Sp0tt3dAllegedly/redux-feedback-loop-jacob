import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import StartFeedback from '../StartFeedback/StartFeedback';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comment from '../Comment/Comment';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    <main>
            <Route exact path='/' component ={StartFeedback}/>
            <Route path='/Feelings' component ={Feelings}/>
            <Route path='/Understanding' component ={Understanding}/>
            <Route path='/Supported' component ={Supported}/>
            <Route path='/Comment' component ={Comment}/>
            
        {/* routes go here!!! */}

    </main>
      </Router>
    );
  }
}

export default App;
