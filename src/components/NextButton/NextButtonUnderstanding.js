import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NextButtonUnderstanding extends Component{

    handleClickUnderstanding = (event) => {

    }

    render() {

        return (
            <button className="nextButton" onClick={this.handleClickUnderstanding}>Next</button>
                )
            }


}



export default connect() ( withRouter (NextButtonUnderstanding) );