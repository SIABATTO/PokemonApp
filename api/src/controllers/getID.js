const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getID = async (id) => {
  let filter = {};
  if (id.length <4) {
    const find = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      return (filter = {
        image: res.data.sprites.other.dream_world.front_default,
        id: res.data.id,
        name: res.data.name,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        speed: res.data.stats[3].base_stat,
        height: res.data.height,
        weight: res.data.weight,
        type: res.data.types.map((t) => {
          return {
            name: t.type.name,
          };
        })
      });
    });
  } else if (id.length > 4) {
    filter = await Pokemon.findOne({ 
      where: {id},
      include: {attributes: ["name"], model: Type}
    });
  };
  return filter;
};

module.exports = getID