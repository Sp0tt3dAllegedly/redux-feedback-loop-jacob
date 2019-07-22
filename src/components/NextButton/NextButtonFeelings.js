import React, {Component} from 'react';
import { withRouter, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NextButtonFeelings extends Component{

    handleClickFeelings = () => {
        alert('Headed to Understanding section!');
        this.props.history.push('/Understanding');
    }

    render() {

        return (
            <button className="nextButton" onClick={this.handleClickFeelings}>Next</button>
                )
            }


}



export default connect() ( withRouter (HashRouter) (NextButtonFeelings) );