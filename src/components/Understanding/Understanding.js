import React, { Component } from 'react';
import {connect} from 'react-redux';



class Understanding extends Component{


        state = {
            understanding: 0,
        }

    handleChangeFor = (event, propertyToChange) => {

        this.setState({
            [propertyToChange]: event.target.value
            
        })

        // check that state was updated by input
        console.log('How well are you understanding the material?', this.state.understanding);
        
    } 

    // dispatches data of answer and check to index.js (reduxStore)
    addFeelings = (event) => {
        event.preventDefault();
     // console.log('adding feelings, and showing other feedback values', this.state.feelings);
        this.props.dispatch({ type: 'UNDERSTANDING_DATA', payload: this.state.understanding});
        this.props.dispatch({ type: 'UNDERSTANDING_DONE' , payload: true});
        this.props.history.push('/supported');
        
    }

    render() {
        return(
        <>
           <div className="understandingComponent">
               
            {/* Input form for feelings renders here, above Review component! */}
               <form onSubmit={this.addUnderstanding(event)}>
                   <label>How are you feeling this week?</label>
                   <br/>
                    <p>Please input a response of a number, 1 - 5; 
                       1 being totally lost, 2 being moderately concerned,
                       4 being comfortable, and 5 being very comfortable.
                    </p>
                    <br/>
                   <input type="number" name="understanding" placeholder="1-5, Please :)"
                          onChange= {(event) => this.handleChangeFor(event, 'understanding')}
                          value={this.state.understanding}>
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




export default connect()(Understanding);