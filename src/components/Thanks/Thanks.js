import React, { Component } from 'react';
import {connect} from 'react-redux';



class Thanks extends Component{

    goHome =()=> {
        this.props.history.push('/feelings');
    }

    render () {
        return(
            <>
            <h1>Thanks for the feedback :)</h1>
                <p>Remember to do your feedback every day!</p>
            <button onClick = {this.goHome}>Home</button>
            </>
    )
}

}

export default connect()(Thanks);