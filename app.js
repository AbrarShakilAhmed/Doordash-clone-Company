const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/", userRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
