const { Pokemon, Type } = require("../db");

const forPut = async(id,change) => {
  const search = await Pokemon.findByPk(id)
  const {name, attack, speed, height} = change
  if (!search){
    return "Not Found"
  }
  else {
    const modify = await search.update({name, attack, speed, height, where:{id}})
    return modify
  };
};

module.exports = forPut;