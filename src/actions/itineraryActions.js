import { GET_ITEMS, GET_ITINERARIES } from './types';

export const getItineraries = () => async (dispatch) => {
  await fetch('https://mytinerary-api.azurewebsites.net/api/itineraries')
    .then((response) => response.json())
    .then((json) => {
      const itineraries = json.itineraries;
      dispatch({
        type: GET_ITEMS,
        payload: itineraries
      })
    })
}

export const findItinerariesByCityId = (props) => async (dispatch) => {  
  await fetch('https://mytinerary-api.azurewebsites.net/api/itineraries/'+props.id)
    .then((response) => response.json())
    .then((json) => {
      const itineraries = json.itineraries;
      dispatch({
        type: GET_ITINERARIES,
        payload: itineraries
      })
    })
}