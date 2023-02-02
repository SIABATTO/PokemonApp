const {getAll} = require("../controllers/getAllPokemon");

const handlerPokemon = async(req, res) => {
  try {
    const { name } = req.query;
    const all = await getAll();
    if (!name) {
      res.status(200).send(all);
    }
    else {
      const pokeName = await all.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase()));
      pokeName.length
      ? res.status(200).send(pokeName) 
      : res.status(404).send("Not Found");
    };
  }
  catch (error) {
    return error.message;
  };
};

module.exports = handlerPokemon;