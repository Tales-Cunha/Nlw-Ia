import express from "express";
import cors from "cors";
import { download } from "./download.js";


const app = express();

app.use(cors());


app.get("/summary/:id", (req, res) => {
  
  download(req.params.id);
  res.json({result: "Dowload video com sucesso"});
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

