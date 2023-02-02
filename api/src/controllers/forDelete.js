const { Pokemon, Type } = require("../db");

const forDelete = async (id) => {
  const pokemonDB = await Pokemon.findByPk(id)

  if (!pokemonDB){
    return "Not Found"
  }
  const dat = await pokemonDB.destroy()
  return dat
};

module.exports = forDelete;