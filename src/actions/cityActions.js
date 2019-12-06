import { GET_ITEMS, GET_CITY } from './types';

export const getCities = () => async (dispatch) => {
  await fetch('https://mytinerary-api.azurewebsites.net/api/cities')
  // await fetch('http://localhost:5000/api/cities')
    .then((response) => response.json())
    .then((json) => {
      const cities = json.cities;
      dispatch({
        type: GET_ITEMS,
        payload: cities,
        isLoading: false
      })
    })
}

export const findCityByCityId = (props) => async (dispatch) => {  
  await fetch('https://mytinerary-api.azurewebsites.net/api/cities/'+props.id)
  .then((response) => response.json())
  .then((json) => {
    const city = json.city;
    dispatch({
      type: GET_CITY,
      payload: city,
      isLoading: false
    })
  })
}