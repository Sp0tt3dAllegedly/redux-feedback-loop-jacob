import React, {Component} from 'react';
import { withRouter, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NextButtonSupported extends Component{

    handleClickSupported = () => {
        alert('Headed to Comment section!');
        this.props.history.push('/Comment');
    }

    render() {

        return (
            <button className="nextButton" onClick={this.handleClickSupported}>Next</button>
                )
            }


}



export default connect() ( withRouter (HashRouter) (NextButtonSupported) );