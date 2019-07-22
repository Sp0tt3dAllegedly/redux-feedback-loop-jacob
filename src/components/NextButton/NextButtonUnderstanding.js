import React, {Component} from 'react';
import { withRouter, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NextButtonUnderstanding extends Component{

    handleClickUnderstanding = () => {
        alert('Headed to Support section!');
        this.props.history.push('/Supported');
    }

    render() {

        return (
            <button className="nextButton" onClick={this.handleClickUnderstanding}>Next</button>
                )
            }


}



export default connect() ( withRouter (HashRouter) (NextButtonUnderstanding) );