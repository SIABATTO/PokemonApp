import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";
export const GET_TYPES = "GET_TYPES";
export const ORDER_BY_TYPES = 'ORDER_BY_TYPES';
export const GET_DETAILS = "GET_DETAILS";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const FILTER_TYPE = "FILTER_TYPE";

//////            home           ////////////
export const getPokemon = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/pokemon");
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMON, payload: pokemon });
  };
};

//////            home           ////////////
export const getTypes = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/type");
    const types = apiData.data;
    dispatch({ type: GET_TYPES, payload: types });
  };
};

export const orderByType = (payload) => {
  return {
    type: ORDER_BY_TYPES,
    payload: payload
  }
}

//////        Detail      //////////////
export const getDetail = (param) => {
  console.log(param)
  return async function (dispatch){
    try {
      const resDetail = await axios.get(`http://localhost:3001/pokemon/${param}`);      
      return dispatch({
        type: GET_DETAILS,
        payload: resDetail.data
      });
    } catch (e) {
      console.log(e);
    }
  }
};

///////       serach bar         ////////////
export const getPokeName = (payload) => {
  return async function (dispatch) {
    try {
      console.log(payload)
      const responseName = await axios.get(`http://localhost:3001/pokemon?name=${payload}`)
      console.log(responseName.data)
      return dispatch({
        type: GET_POKEMON_NAME,
        payload: responseName.data
      });
    } catch (e) {
        console.log(e);
    }
  };
}

export const postPokemon = (payload) => {
  return async function () {
    const json = axios.post("http://localhost:3001/pokemon", payload)
    return json
  }
}

/////////     FILTERS      //////////
export const orderName = (payload) => {
  return { type: ORDER_BY_NAME, payload }
}

export const filterOrigin = (payload) => {
  return { type: FILTER_ORIGIN, payload }
}

export const filterType = (payload) => {
  return { type: FILTER_TYPE, payload }
}