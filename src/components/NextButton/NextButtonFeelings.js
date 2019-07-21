import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NextButtonFeelings extends Component{

    handleClickFeelings = (event) => {

    }

    render() {

        return (
            <button className="nextButton" onClick={this.handleClickFeelings}>Next</button>
                )
            }


}



export default connect() ( withRouter (NextButtonFeelings) );