import { GET_ITEMS, GET_ITINERARIES } from '../actions/types';

const initialState = {
  itineraries: [
    {
    author: "Kevin",
    rating: "22",
    duration: "8",
    cost: "1353",
    hashtags: [{0: "Food"}, {1: "Drink"}]
    },
    {
    author: "Pedro",
    rating: "31",
    duration: "6",
    cost: "654",
    hashtags: [{0: "Football"}, {1: "Parks"}]
    }
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        itineraries: action.payload
      }
    case GET_ITINERARIES:
      return {
        ...state,
        itineraries: action.payload
      }
    default:
      return state;
  }
}