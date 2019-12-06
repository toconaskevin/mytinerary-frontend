import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initState = {
  cities: null,
  itineraries: null,
  isLoading: true
}

const middleware = [thunk];

const store = createStore(rootReducer, initState, composeWithDevTools(
  applyMiddleware(...middleware)
));

export default store;