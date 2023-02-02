const axios = require("axios");
const {Type} = require("../db");

const getTypes = async () => {
  try {
    const get = await axios("https://pokeapi.co/api/v2/type");
    const data = get.data.results.forEach(async(e) => {
      await Type.findOrCreate({where: {name: e.name}});
    });
    return Type.findAll();
  }
  catch (error) {throw new Error("Uups!")};
};

module.exports = getTypes;