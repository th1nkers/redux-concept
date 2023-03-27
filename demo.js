const redux = require('redux');

const counterReducer = (state = {counter: 0} , action) => {
    
    if(action.type === 'ADD'){
    return{
        counter: state.counter + 1
    };}

    if(action.type === 'MINUS'){
        return{
            counter: state.counter - 1
        }
    }
    
    return state;
};

const store = redux.createStore(counterReducer);

console.log(store.getState())

const counterSubs = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubs);

store.dispatch({type: 'ADD'});
store.dispatch({type: 'MINUS'});