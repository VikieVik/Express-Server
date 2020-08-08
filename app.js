const express = require("express");
const { request } = require("express");
const path = require("path");
const app = express();
const port = 5000;

app.get("/", (request, response) => {
  response.send(
    "server is live type - http://localhost:5000/predict/?id=pos_0_0 to request"
  );
});

app.get("/predict", (request, response) => {
  response.end(JSON.stringify(request.query));
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
