const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

require("dotenv").config();

const app = express();

const port = process.env.PORT;
const hostname =
  process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0";

app.use(
  cors({
    credentials: true,
    origin: "*",
  }),
);

app.use(express.json());

app.use(routes);

app.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}`);
});
