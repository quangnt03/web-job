require("module-alias/register");
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const { environmentConfig } = require("@configs");
const cors = require("cors");
const connectMongoDb = require("@utils/ConnectMongoDB");
const rootRouter = require("./routes/rootRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(cors());

app.use("/", rootRouter);

connectMongoDb()
  .then(() => {
    app.listen(environmentConfig.PORT, () => {
      console.log(`listening on port ${environmentConfig.PORT}`);
    });
  })
  .catch((error) => {
    console.log("[ERROR] Failed to listen");
    process.exit(1);
  });
