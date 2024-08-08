import express from 'express';
const app = express();
const port = 3000;
var sentences;
const d = new Date("July 30, 2024 12:12:12");
const w = d.getDay();
console.log(w);
if (w === 0 || w === 6){
  sentences = "It's a weekend, it's time to have fun!";
}else{
  sentences = "It's a week day, it's time to work hard!";
}
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("index",{
    words : sentences,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});