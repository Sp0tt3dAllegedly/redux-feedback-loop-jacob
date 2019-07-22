import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import Components
import SubmitButton from '../SubmitButton/SubmitButton';

class ReviewFeedback extends Component {

    render(){
        return(
        <>
        <div className="reviewFeedback">
            <h1>Review your feedback here!</h1>
        <SubmitButton />
        </div>
        </>
        )
    }
}

export default connect() (ReviewFeedback);