const axios = require("axios");
const { Pokemon, Type } = require("../db");

const apiPokemon = async () => {
  try {
    const api = await axios("https://pokeapi.co/api/v2/pokemon?limit=40");
    let allPkemon = [];

    const info = await api.data.results.map((e) => {
      return allPkemon.push(axios(e.url)); //Aca se cragan los url de cada pokemon//
    });

    await Promise.all(allPkemon).then((res) => {
      allPkemon = res.map((e) => {
        return {
          id: e.data.id,
          name: e.data.name,
          hp: e.data.stats[0].base_stat,
          attack: e.data.stats[1].base_stat,
          defense: e.data.stats[2].base_stat,
          speed: e.data.stats[3].base_stat,
          height: e.data.height,
          weight: e.data.weight,
          image: e.data.sprites.other.dream_world.front_default,
          types: e.data.types.map((t) => {
            return {
              name: t.type.name,
            };
          })
        };
      });
    });
    return allPkemon;
  }
  catch (error) {
    throw new Error(error.message);
  }
};

const myDB = async () => {
  try {
    const data = await Pokemon.findAll({
      include: {
        attributes: ["name"],
        model: Type,
        through: {attributes: []}
      }
    });
    return data;
  }
  catch (error) {
    throw new Error(error.message);
  }
};

// Concateno
const getAll = async() => {
  try {
    const infoApi = await apiPokemon();
    const infoDB = await myDB();
    return [...infoDB, ...infoApi]; 
  }
  catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {getAll};