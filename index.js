const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

var usuarios = [
  {
    nome: "Clebinho",
    endereco: "Rua 3, Morada do Sol, n°500",
  },

  {
    nome: "Rogério",
    endereco: "Av. Ivinhema, n°510, Nova Andradina",
  },
];

app.get("/", (req, res) => {
  res.render("home", { usuarios });
});

app.get("/novo", (req, res) => {
  res.render("formCadastro");
});

app.get("/usuario/:id", (req, res) => {
  let usuario = {
    nome: "Jonatam",
    endereco: "",
  };
  res.render("usuario", usuario);
});

app.listen(8000, () => {
  console.log("Servidor rodando!!!!");
});
