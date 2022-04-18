const express = require("express");
const { people } = require("./People.js");
const path = require("path");
const app = express();

app.use(express.json());
app.use(
  express.static("../hellthgoBackend/demo_pj/sign_in_page/src/components")
);

app.get("/", (req, res) => {
  // res.json(people);
  const peeps = (e) => {
    people.map(e.Published);
  };
  res.send(people);
});
app.get("/page", (req, res) => {
  res.render(
    path.resolve(
      // "../hellthgoBackend/demo_pj/sign_in_page/src/components/Loginmain.js"
      __dirname,
      "../hellthgoBackend/demo_pj/sign_in_page/src/components/Loginmail.js"
    )
  );
  //res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});
app.all("*", (req, res) => {
  res.send("couldnt fingd the pge");
});

app.listen(5000, (req, res) => {
  console.log("serveer started on port 5000");
});
