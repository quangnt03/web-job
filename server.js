require("module-alias/register");
require("express-async-errors");
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { environmentConfig } = require("./configs");
const connectMongoDb = require("./utils/ConnectMongoDB");
const rootRouter = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(rootRouter);

connectMongoDb()
  .then(() => {
    app.listen(environmentConfig.PORT, () => {
      console.log(`listening on port ${environmentConfig.PORT}`);
    });
  })
  .catch((err) => {
    console.log("[ERROR] Failed to listen");
    console.log(err);
    process.exit(1);
  });
