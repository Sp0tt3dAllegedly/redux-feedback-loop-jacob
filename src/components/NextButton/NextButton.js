import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NextButton extends Component{

 render() {

    return (
        <button className="nextButton" onClick={this.handleClick}>Next</button>
    )
  }


}



export default connect() ( withRouter (NextButton) );