import React, { Component } from 'react';
import {connect} from 'react-redux';



class StartFeedback extends Component {

    render(){
        return(
            <>
                <div>
                    <h1>Please start your feedback form! :)</h1>
                    <br/>
                    <p className="startFeedbackPtag">We appreciate your input!</p>
                </div>





            </>
        )
    }


}


export default connect()(StartFeedback);