import React, {Component} from 'react';
import { withRouter, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NextButtonComment extends Component {

    handleClickComment = () => {
        alert('Headed to Review!');
        this.props.history.push('/ReviewFeedback');
    }

    render() {

        return (
            <button className="nextButton" onClick={this.handleClickComment}>Next</button>
                )
            }


}



export default connect() ( withRouter (HashRouter) (NextButtonComment) );