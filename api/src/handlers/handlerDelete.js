const forDelete = require("../controllers/forDelete");

const handlerDelete = async(req, res) => {
  try {
    const { id } = req.params
    const deletePokemon = await forDelete(id)
    res. status(200).send("Pokemon erased succesfully")
  }
  catch (error) {
    res.status(400).send("Oops something's wrong")
  };
};

module.exports = handlerDelete;