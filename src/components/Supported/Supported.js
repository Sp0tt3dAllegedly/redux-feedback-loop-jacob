import React, { Component } from 'react';
import {connect} from 'react-redux';

// Import Components here, if we were doing that...
// import Review from '../Review/Review.js'

class Supported extends Component {

        state = {
            supported: 0,
        }

    handleChangeFor = (event, propertyToChange) => {

        this.setState({
            [propertyToChange]: event.target.value
            
        })

        // check that state was updated by input
        console.log('How are supported are you feeling?', this.state.supported);
        
    } 

    // dispatches data of answer and check to index.js (reduxStore)
    addSupported = (event) => {
        event.preventDefault();
     // console.log('adding supported, and showing other feedback values', this.state.supported);
        this.props.dispatch({ type: 'SUPPORTED_DATA', payload: this.state.supported});
        this.props.dispatch({ type: 'SUPPORTED_DONE' , payload: true});
        this.props.history.push('/comment');
        
    }

    render() {
        return(
        <>
           <div className="supported">
               
            {/* Input form for supported renders here, above Review component! */}
               <form onSubmit={(event)=>this.addSupported(event)}>
                   <label>How are you feeling this week?</label>
                   <br/>
                    <p className ="supportedPtag">Please input a response of a number, 1 - 5; 
                       1 being total abandonment, 2 being not supported as best you could be,
                       4 being comfortable support, and 5 being totally supported.
                    </p>
                    <br/>
                   <input type="number" name="supported" placeholder="1-5, Please :)"
                          onChange= {(event) => this.handleChangeFor(event, 'supported')}
                          value={this.state.supported}>
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

export default connect()(Supported);