import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SubmitButton extends Component {

  handleClick = () => {

    alert(`Thanks for your Feedback!!`);

 // by changing history (adding onto means to go to that place you added)
    this.props.history.push('/');

  }

  render() {

    return (
        <button className="submitButton" onClick={this.handleClick}>Submit</button>
    )
  }
}

export default connect ()( withRouter (SubmitButton) );