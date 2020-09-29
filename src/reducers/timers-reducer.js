// Import all of our actions
import { NEW_TIMER, TOGGLE_TIMER, DELETE_TIMER, UPDATE, RESET } from '../actions';
import Timer from '../Timer';

const timerReducer = (state = [], action) => {
    switch (action.type) {
        case NEW_TIMER:
             // Add a new timer, return a copy of state
             const name = action.payload.name ? action.payload.name : `Timer ${state.length}`;
             return [...state, new Timer(name)]

        case TOGGLE_TIMER:
           // Invert the isRunning property of timer at index, return a copy of state
           const newState = state.map((timer, index) => {
               if (action.payload.index === index) {
                   return {...timer, isRunning: !timer.isRunning}
               }
               return timer;
           })
           return newState 
        
        case RESET:
            const newTime = state.map((timer, index) => {
                if (action.payload.index === index) {
                    return  new Timer(timer.name);
                }
                return timer
            }) 
            return newTime  
        
        case DELETE_TIMER:
            return [...state.slice(0, action.payload.index), ...state.slice(action.payload.index + 1)];
            

        case UPDATE:
            return state.map((timer) => {
                if (timer.isRunning) {
                  timer = { ...timer, time: timer.time += action.payload.deltaTime }
                }
                return timer
              })
                  

        default:
            return state;   
    }
}

export default timerReducer;