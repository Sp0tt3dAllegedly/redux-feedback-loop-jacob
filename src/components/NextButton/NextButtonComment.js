import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NextButtonComment extends Component {

    handleClickComment = (event) => {

    }

    render() {

        return (
            <button className="nextButton" onClick={this.handleClickComment}>Next</button>
                )
            }


}



export default connect() ( withRouter (NextButtonComment) );