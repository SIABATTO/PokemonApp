const forPut = require("../controllers/forPut");

const handlerPut = async (req, res) => {
  try {
    const { id } = req.params
    const modify = await forPut(id, req.body)
    res.status(201).send(modify)
  }
  catch (error) {
    res.status(400).send(error.message)
  };
};
 module.exports = handlerPut;