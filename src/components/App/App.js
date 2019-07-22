import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import StartFeedback from '../StartFeedback/StartFeedback';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comment from '../Comment/Comment';
import ReviewFeedback from '../Review/ReviewFeedback';
import Review from '../Review/Review';

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
         {/* Routes here for each component to display above review component */}
            <Route exact path='/' component ={StartFeedback}/>
            <Route path='/feelings' component ={Feelings}/>
            <Route path='/understanding' component ={Understanding}/>
            <Route path='/supported' component ={Supported}/>
            <Route path='/comment' component ={Comment}/>
            <Route path='/reviewFeedback' compontent={ReviewFeedback} />

          {/* This last route is so that whatever renders, the review component will also render */}
            <Route path='/:id' component ={Review} />

    </main>
      </Router>
    );
  }
}

export default connect() (App);
