import React, { Component } from 'react';
import {connect} from 'react-redux';



class Comment extends Component{


        state = {
            comment: '',
        }

    handleChangeFor = (event, propertyToChange) => {

        this.setState({
            [propertyToChange]: event.target.value
            
        })

        // check that state was updated by input
        console.log('How well are you comment the material?', this.state.comment);
        
    } 

    // dispatches data of answer and check to index.js (reduxStore)
    addComment = (event) => {
        event.preventDefault();
     // console.log('adding comment, and showing other feedback values', this.state.comment);
        this.props.dispatch({ type: 'COMMENT_DATA', payload: this.state.comment});
        this.props.dispatch({ type: 'COMMENT_DONE' , payload: true});
        this.props.history.push('/supported');
        
    }

    render() {
        return(
        <>
           <div className="commentComponent">
               
            {/* Input form for comment renders here, above Review component! */}
               <form onSubmit={(event)=> this.addComment(event)}>
                   <label>How are you feeling this week?</label>
                   <br/>
                    <p>Please input a response of a number, 1 - 5; 
                       1 being totally lost, 2 being moderately concerned,
                       4 being comfortable, and 5 being very comfortable.
                    </p>
                    <br/>
                   <input type="text" name="comment" placeholder="What other feedback do you have for us?"
                          onChange= {(event) => this.handleChangeFor(event, 'comment')}
                          value={this.state.comment}>
                   </input>
                   <button type="submit">Take me to the next section</button>
               </form>

           </div>

           {/* Pretty sure doing this would cause my routing to go haywire...

                    I'm trying to have the Review component show by setting it to
                        /:id in my Router on App.js 
            */}

           {/* <div className="mainReviewDiv">
               <Review />
           </div> */}
        </>
        )
    }

}




export default connect()(Comment);