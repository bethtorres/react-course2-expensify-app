import {createStore} from 'redux';

// action generators - return action objects



const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// reducers

// 1. pure functions - output determined by input
// 2. never change inputs (state or action)

const countReducer = (state = {count:0}, action) => {   //default value of state, action(objects)
    switch(action.type) {
        case 'INCREMENT':
                return {
                    count: state.count + action.incrementBy
                };
        case 'DECREMENT':
                return {
                    count: state.count - action.decrementBy
                };
        case 'SET':
                return {
                    count: action.count
                };

        case 'RESET':
                return {
                    count: 0
                }; 

        default: return state;
    }
};

const store = createStore(countReducer());


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - object gets sent to store

// increment 
// store.dispatch({   // dispatch action object to store
//     type: 'INCREMENT',  // naming convention:  'INCREMENT_OTHER'  - type required
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: -100}));