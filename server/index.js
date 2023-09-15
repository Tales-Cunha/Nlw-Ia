import express from "express";
import cors from "cors";
import { download } from "./download.js";
import { transcribe } from "./transcribe.js";


const app = express();

app.use(cors());


app.get("/summary/:id", async (req, res) => {
  await download(req.params.id);
  const result = await transcribe()
  //res.send("Hello World"+req.params.id);
  res.json({result});
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

