const createPokemon = require("../controllers/createPokemon");

const postPoke = async (req, res, next) => {
  try {
    const response = await req.params;
    const fil = await createPokemon (req.body);
    res.status(201).send({
      status: "Has been created succefully"
    })
    if (fil) {
      res.status(201).send(fil);
    };
  }
  catch (error) {
    res.status(404).send(error)
    next(error)
  };
};

module.exports = postPoke;








// cosnt {Router} = 
//     type.forEach(async (t) => await newPoke.addType(t))
//       res.status(201).send(newPoke);
//     } 
//     catch (error) {
//       res.status(404).send(error.message);
//     };
// };

// module.exports = handleCreate;