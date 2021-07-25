const db = require("../database");

const recipeController = {
    one: (req, res) => {
        res.send(db);
    },
};

module.exports = recipeController;