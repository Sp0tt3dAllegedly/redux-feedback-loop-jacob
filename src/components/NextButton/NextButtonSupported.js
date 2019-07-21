import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NextButtonSupported extends Component{

    handleClickSupported = (event) => {

    }

    render() {

        return (
            <button className="nextButton" onClick={this.handleClickSupported}>Next</button>
                )
            }


}



export default connect() ( withRouter (NextButtonSupported) );