import express from "express";
import elementsRouter from "./routes/elements.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(elementsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
