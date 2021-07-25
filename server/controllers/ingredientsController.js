const db = require("../database");

const ingredientsController = {
    list: (req, res) => {
        res.send(db);
    },

    modify: (req, res) => {
        const { name, amount, measure } = req.body.ingredient;
        const aux = db.ingredients.map((item) => {
            if (item.name === name) {
                item.amount = amount;
                item.measure = measure;
            }
            return item;
        });
        db.ingredients = aux;
        res.send(db);
    },

    delete: (req, res) => {
        const { name } = req.body.ingredient;
        const aux = db.ingredients.filter((item) => item.name !== name);
        db.ingredients = aux;
        res.send(db);
    },

    add: (req, res) => {
        const { ingredient } = req.body;
        const aux = db.ingredients.push(ingredient);
        res.send(db);
    },
};

module.exports = ingredientsController;