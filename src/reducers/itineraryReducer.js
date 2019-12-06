import { GET_ITEMS, GET_ITINERARIES } from '../actions/types';

const initialState = {
  itineraries: null,
  isLoading: true
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        itineraries: action.payload,
        isLoading: action.isLoading
      }
    case GET_ITINERARIES:
      return {
        ...state,
        itineraries: action.payload,
        isLoading: action.isLoading
      }
    default:
      return state;
  }
}