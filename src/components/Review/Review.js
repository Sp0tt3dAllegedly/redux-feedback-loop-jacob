import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';


class Review extends Component {

    // Establish component local state to be updated
    // with data from input components!
    
state = {
    feeling: this.props.reduxStore.formReducer.feelings,
    understanding: this.props.reduxStore.formReducer.understanding,
    support: this.props.reduxStore.formReducer.supported,
    comments: this.props.reduxStore.formReducer.comment
        
    }

    postFeedback = () => {
        axios.post('/submit', this.state)
        .then(response => {
            this.props.history.push('thanks');
        })
        .catch(error => {
            console.log(error);
            
        })
    }

    sendFeedback = () => {
       let checkFeedback = this.props.reduxStore.checkCompletedForm;

     if (checkFeedback.feelings && checkFeedback.understanding 
        && checkFeedback.support && checkFeedback.comments) {
        return (
            <button className="submitButton" 
            onClick={()=> this.postFeedback}>Finish up your feedback!</button>
        )
        }
     else { 
        return(<h2>Finish up your feedback!</h2>);        
        }
    }

    render(){
        return(
            <div>
                <h1>Here's a list of your feedback!</h1>
                    <ol>
                        <li>Feelings: {this.props.reduxStore.formReducer.feelings.value}</li>
                        <li>Understanding: {this.props.reduxStore.formReducer.understanding.value}</li>
                        <li>Support: {this.props.reduxStore.formReducer.supported.value}</li>
                        <li>Comments: {this.props.reduxStore.formReducer.comment.value}</li>
                    </ol>
                {this.sendFeedback()}
            </div>
        )
    }

}

    
const mapToProps = (reduxStore) => ({
    reduxStore
})       

export default connect(mapToProps)(Review);