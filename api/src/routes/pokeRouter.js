const { Router } = require("express");
const pokeRouter = Router();
const handlerPokemon = require("../handlers/handlerPokemon");
const handlerID = require("../handlers/handlerID");
const postPoke = require("../handlers/handlerCreate");
// const handlerPut = require("../handlers/handlerPut");
// const handlerDelete = require("../handlers/handlerDelete");

// Routs for pokemon models

pokeRouter.get("/", handlerPokemon);
pokeRouter.get("/:idPokemon", handlerID);
pokeRouter.post("/", postPoke);
// pokeRouter.put("/:id", handlerPut);
// pokeRouter.delete("/:id", handlerDelete);

module.exports = pokeRouter;