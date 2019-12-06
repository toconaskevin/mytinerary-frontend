import { GET_ITEMS, GET_CITY } from '../actions/types';

const initialState = {
  cities: null,
  isLoading: true
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        cities: action.payload,
        isLoading: action.isLoading
      }
    case GET_CITY:
      return {
        ...state,
        cities: action.payload,
        isLoading: action.isLoading
      }
    default:
      return state;
  }
}