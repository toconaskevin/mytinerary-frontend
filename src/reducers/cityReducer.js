import { GET_ITEMS, GET_CITY } from '../actions/types';

const initialState = {
  cities: [
    {name: "Buenos Aires", country: "Argentina"},
    {name: "Lima", country: "Peru"},
    {name: "Mexico DF", country: "Mexico"}
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        cities: action.payload
      }
    case GET_CITY:
      return {
        ...state,
        cities: action.payload
      }
    default:
      return state;
  }
}