import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";

const app = express();
const port = 3000;
let id;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
let values = [];
app.get("/", (req, res) => {
  res.render("index.ejs",{
    values: values,
  });
});

app.get("/post", (req, res) => {
  res.render("post.ejs");
});

app.post("/", (req, res) => {
  const title = req.body["title"];
  const words = req.body["words"];
  let value = [title, words];
  values.push(value);
  console.log(values);
  res.render("index.ejs",{
    values : values,
  });
});
app.patch("/",(req, res) => {
  console.log("workd")
  const title = req.body["title"];
  const words = req.body["words"];
  let value = [title, words];
  values[id] = value;
  res.render("index.ejs",{
    values :values,
  });
});
app.get("/edit/:id", (req, res) => {
  id = req.params.id;
  res.render("edit.ejs",{
    values : values,
    idx : req.params.id,
  });
});
app.get("/delete/:id", (req, res) => {
  id = req.params.id;
  res.render("delete.ejs");
})
app.delete("/", (req, res) => {
  console.log(id)
  values.splice(id,1);
  console.log(values)
  res.render("index.ejs",{
    values :values,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});