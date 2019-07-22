import React, {Component} from 'react';
import { withRouter, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SubmitButton extends Component {

  handleSubmitClick = () => {

    alert(`Thanks for your Feedback!!`);
    
    this.props.history.push('/');

  }

  render() {

    return (
        <button className="submitButton" onClick={this.handleSubmitClick}>Submit</button>
    )
  }
}

export default connect ()( withRouter (HashRouter) (SubmitButton) );