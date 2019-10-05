const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://enzorium:enzorium@aircnc-j47qf.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
// GET, POST, DELETE, PUT

//req.querry = Acessar querry params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body   = Acessar corpo da requisição (Para criação, ediçao)

app.use(express.json());
app.use(routes);

app.listen(3333);
