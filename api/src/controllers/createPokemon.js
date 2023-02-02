const { Pokemon, Type } = require("../db");

const createPokemon = async (data) => {
  try {
    const {name, speed, image, attack, weight, height, defense, hp, type} = data;
    const newPoke = await Pokemon.create({
      name: name, 
      speed: speed,
      image: image,
      attack: attack, 
      weight: weight, 
      height: height, 
      defense: defense,
      hp: hp
    });

    const pokemonTypes = await Type.findAll({
      where: { name: type }
    })
    newPoke.addType(pokemonTypes)
    return res.send('Pokemon created successfuly')
  }
  catch (error) {
    console.log(error)
  };
}; 

module.exports = createPokemon;
