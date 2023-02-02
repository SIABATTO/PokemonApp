const { Router } = require("express");
const typeRouter = Router();
const handlerTypes = require("../handlers/handlerTypes");

// Routs for pokemon types

typeRouter.get("/", handlerTypes);

module.exports = typeRouter;