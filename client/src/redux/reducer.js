import {
  GET_POKEMON,
  GET_TYPES,
  GET_DETAILS,
  GET_POKEMON_NAME,
  FILTER_ORIGIN,
  FILTER_TYPE,
  ORDER_BY_NAME,
} from "./actions";

const initialState = {
  pokemon: [],
  types: [],
  detail: [],
  types: [],
  allPokemons: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return { ...state, pokemon: action.payload };

    case GET_TYPES:
      return { ...state, types: action.payload };

    case GET_DETAILS:
      return { ...state, detail: [action.payload] };

    case GET_POKEMON_NAME:
      return { ...state, pokemon: action.payload && [...action.payload] };

    case FILTER_ORIGIN:
      const filterCreated =
        action.payload === "created"
          ? state.allTypes.filter((e) => e.created === true)
          : state.allTypes.filter((e) => e.created === false);
      return {
        ...state,
        types: action.payload === "all" ? state.allTypes : filterCreated,
      };

    case FILTER_TYPE:
      const allTypes = state.allTypes;
      const filterTypes =
        action.payload === "all"
          ? allTypes
          : allTypes.filter((pokemon) =>
              pokemon.types.find((e) => e === action.payload)
            );
      return { ...state, pokemon: filterTypes };

    case ORDER_BY_NAME:
      const allPokemons2 = state.allPokemons;
      const nameSorted =
        action.payload === "asc"
          ? allPokemons2.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : allPokemons2.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return { ...state, allPokemons: nameSorted };

    default:
      return { ...state };
  }
};

export default rootReducer;
