import { createStore, compose, applyMiddleware } from 'redux';
import reduceCounter from './reducer';
import thunk from 'redux-thunk';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
const m= [thunk]
// export default createStore(reduceCounter, undefined, composeEnhancer(applyMiddleware(thunk)));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduceCounter, /* preloadedState, */ composeEnhancers(

    applyMiddleware(...m)
  ));

  export default store;