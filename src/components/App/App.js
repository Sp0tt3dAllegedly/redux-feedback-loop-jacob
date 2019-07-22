import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import StartFeedback from '../StartFeedback/StartFeedback';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comment from '../Comment/Comment';
import ReviewFeedback from '../Review/ReviewFeedback';

class App extends Component {


addSubmission = (event) => {
  event.preventDefault();
  // console.log('new submission', this.state.newSubmission);
  axios.post('/submit')
}


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
            <Route path='/Feelings' component ={Feelings}/>
            <Route path='/Understanding' component ={Understanding}/>
            <Route path='/Supported' component ={Supported}/>
            <Route path='/Comment' component ={Comment}/>
            <Route path='/ReviewFeedback' compontent={ReviewFeedback} />
            
          {/* This last route is so that whatever renders, the review component will also render */}
            <Route path='/:id' component ={Review} />
            
        {/* routes go here!!! */}

    </main>
      </Router>
    );
  }
}

export default App;
