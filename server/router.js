const express = require("express");
const router = express.Router();
const ingredientsController = require('./controllers/ingredientsController.js')
const recipeController = require('./controllers/recipeController.js')

router.get(
    "/recipe",
    recipeController.one
);

router.get(
    "/ingredients",
    ingredientsController.list
);

router.patch(
    "/ingredients",
    ingredientsController.modify
);

router.delete(
    "/ingredients",
    ingredientsController.delete
);

router.post(
    "/ingredients",
    ingredientsController.add
);

module.exports = router;
