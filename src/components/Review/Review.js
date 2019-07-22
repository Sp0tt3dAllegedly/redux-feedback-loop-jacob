import React, { Component } from 'react';
import {connect} from 'react-redux';



class Review extends Component {

    // Establish component local state to be updated
    // with data from input components!
state = {
    newSubmission: {
        feelings:0,
        understanding:0,
        supported:0,
        comments:'',
        flagged: 'false',
        date: '',
    }

}

    render() {

        return (
           
            <div className="mainReviewDiv">
                
            </div>
            )
    }
         
    

}

export default connect()(Review);