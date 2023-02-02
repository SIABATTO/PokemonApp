const getTypes = require("../controllers/getTypes");

const handlerTypes = async(req, res) => {
  try {res.status(200).send(await getTypes())}
  catch (error) {res.status(400).send(error.message)};
};

module.exports = handlerTypes;