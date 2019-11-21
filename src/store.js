import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initState = {
  cities: [{
    id: 1,
    name: "Buenos Aires",
    country: "Argentina"
  }],
  itineraries: [{
    author: "Carlos",
    rating: "8",
    duration: "13",
    cost: "961",
    hashtags: [{0: "Sports"}, {1: "Lakes"}]
  }]
}

const middleware = [thunk];

const store = createStore(rootReducer, initState, composeWithDevTools(
  applyMiddleware(...middleware)
));

export default store;