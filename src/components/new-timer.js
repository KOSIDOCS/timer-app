import React, { Component } from 'react';
import { connect } from 'react-redux';
import './new-timer.css'

// We need to import our action to add a new timer
import { addTimer } from '../actions';

class NewTimer extends Component {
    constructor(props) {
        super(props)
        this.state = { name: ""}
    }

    render() {
        // Build out a component that takes a name as input and a save button to save the timer
        return (
            <div className='new-timer'>
                <input type='text' className='new-timer__input'
                    placeholder="New Timer Name" 
                    name="name" 
                    value={this.state.name} 
                    onChange={(e) => this.setState({ name: e.target.value})}/>
                    <button onClick={(e) => {
                        this.props.addTimer(this.state.name)
                    }} className='new-timer__button'>Save</button>
            </div>
        )
    }
}

// Not needed for this component
const mapStateToProps = (state) => {
    return {}
  }

// Use 'mapDispatchToProps' to connect the 'newTimer' action creator to this component. Here is a stub for the component:
const mapDispatchToProps = () => {
    return { addTimer }
}  

export default connect(mapStateToProps, mapDispatchToProps())(NewTimer);