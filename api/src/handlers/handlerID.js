const getID = require("../controllers/getID");

const handlerID = async (req, res) => {
  try {
    const { idPokemon } = req.params;
    const filter = await getID(idPokemon);
    if (filter) {
      res.status(200).send(filter);
    };
  }
  catch (error) {
    res.status(404).send("Not Found");
  };
};

module.exports = handlerID