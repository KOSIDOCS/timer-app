// This component displays a single timer.
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTime, resetTime } from './utils/index'
import './components/timer-view.css'

// Import our toggleTimer action
import { toggleTimer, deleteTimer } from './actions/index'

class TimerView extends Component {
    constructor(props) {
        super(props)
    }

    // Timer should have its name, time, and a start/stop button (logic for this button will be built out later)
    render() {

        // Extract these specific props to use in the component
        const { index, toggleTimer, timer} = this.props
        const buttonClass = timer.isRunning ? "stop" : "start";
        return (
            <div className='timer-view'>
        <h2 className='timer-view-name__h2'>{timer.name}</h2>
        <h1 className='timer-view-name___h1'>{formatTime(timer.time)}</h1>
        <button
            // This calls our toggleTimer action on the specific timer (specified by the index)
            onClick={(e) => {
                toggleTimer(index)
            }} className={`timer-view__button timer-view__button--${buttonClass}`}>
             {/* Text of the button is determined by if the timer is running or not */}
            {timer.isRunning ? "Stop" : "Start"}
        </button>

        {/* <button onClick={(e) => {
            deleteTimer(index)
        }} className='timer-view-name__button'>
             Delete
        </button>

        <button onClick={(e) => {
            resetTime(timer.time)
        }}
        className='timer-view-name__button'>
            reset
        </button> */}
      </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
  }
  
// Use the toggleTimer action for this component
const mapDispatchToProps = () => {
    return { toggleTimer, deleteTimer }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps())(TimerView)  