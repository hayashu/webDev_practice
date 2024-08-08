import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{
    words : "Enter your name below 👇",
  })
});

app.post("/submit", (req, res) => {
  let wordsLength = req.body.fName + req.body.lName;
  res.render("index.ejs",{
    words : "There are " + wordsLength.length + " letters in your name.",
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
