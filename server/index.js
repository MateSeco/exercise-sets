require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

// Router
const router = require("./router.js");

const app = express();
const port = process.env.APP_PORT;

// Configuracion app
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server listening in: ${port}`));
