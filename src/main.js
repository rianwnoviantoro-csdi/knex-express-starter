import bodyParser from "body-parser";
import express from "express";
import knex from "knex";

import config from "../knexfile.js";
import { App } from "./constant/app.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the PostgreSQL database
knex(config.development);

// Start the server
const host = App.host;
const port = App.port;

app.listen(port, host, () => {
  console.log(`Server running on http://${App.host}:${port}/`);
});
