import React, { Component } from 'react';
import {connect} from 'react-redux';



class StartFeedback extends Component {

    beginFeedback = () => {
        this.props.history.push('/feelings');
    }

    render(){
        return(
            <>
                <div>
                    <h1>Please start your feedback form! :)</h1>
                    <br/>
                    <p className="startFeedbackPtag">We appreciate your input!</p>
                    <button className="nextButton" onClick={this.beginFeedback}>Begin Your Feedback!</button>
                </div>


            </>
        )
    }


}


export default connect()(StartFeedback);