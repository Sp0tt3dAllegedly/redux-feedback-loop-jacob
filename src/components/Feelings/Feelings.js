import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import Components here!
import Review from '../Review/Review.js'

class Feelings extends Component {

        state = {
            feeling: 0
        }

    handleChangeFor = (event) => {

        this.setState({
            feeling: event.target.value
            
        })

        // check that state was updated by input
        console.log('How are you Feeling?', this.state.feeling);
        
    } 

    addFeelings = (event) => {
        event.preventDefault();
        console.log('adding feelings, and showing other feedback values', this.state.feeling);
        this.props.history.push('/understanding')
        
    }

    render() {
        return(
        <>
           <div className="feelingsComponent">
               
            {/* Input form for feelings renders here, above Review component! */}
               <form onSubmit={this.addFeelings}>
                   <label>How are you feeling this week?</label>
                   <br/>
                    <p>Please input a response of a number, 1 - 5; 
                       1 being very stressed,
                       5 being very confident.
                    </p>
                    <br/>
                   <input type="text" name="feelings" 
                          onChange= {this.handleChangeFor}
                          value={this.state.newSubmission.feelings}>
                   </input>
                {/* the button below will be replaced by NextButton component! 
                   <button className="nextButton">Next</button>     */}
               </form>

           </div>

            {/* import review component here */}
            <Review />


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

export default connect()(Feelings);