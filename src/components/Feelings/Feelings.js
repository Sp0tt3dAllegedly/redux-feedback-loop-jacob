import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import Components here, if we were doing that...
// import Review from '../Review/Review.js'

class Feelings extends Component {

        state = {
            feelings: 0,
        }

    handleChangeFor = (event, propertyToChange) => {

        this.setState({
            [propertyToChange]: event.target.value
            
        })

        // check that state was updated by input
        console.log('How are you Feeling?', this.state.feelings);
        
    } 

    // dispatches data of answer and check to index.js (reduxStore)
    addFeelings = (event) => {
        event.preventDefault();
     // console.log('adding feelings, and showing other feedback values', this.state.feelings);
        this.props.dispatch({ type: 'FEELINGS_DATA', payload: this.state.feelings});
        this.props.dispatch({ type: 'FEELINGS_DONE' , payload: true});
        this.props.history.push('/understanding');
        
    }

    render() {
        return(
        <>
           <div className="feelingsComponent">
               
            {/* Input form for feelings renders here, above Review component! */}
               <form onSubmit={(event)=>this.addFeelings(event)}>
                   <label>How are you feeling this week?</label>
                   <br/>
                    <p>Please input a response of a number, 1 - 5; 
                       1 being very stressed, 2 being moderately stressed,
                       4 being pretty confident, and 5 being very confident.
                    </p>
                    <br/>
                   <input type="number" name="feelings" placeholder="1-5, Please :)"
                          onChange= {(event) => this.handleChangeFor(event, 'feelings')}
                          value={this.state.feelings}>
                   </input>
                   <button type="submit">Take me to the next section</button>
                {/* the button below will be replaced by NextButton component! 
                   <button className="nextButton">Next</button>     */}
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

export default connect()(Feelings);