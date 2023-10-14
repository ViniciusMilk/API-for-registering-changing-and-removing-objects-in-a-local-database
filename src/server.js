const express = require("express");
const app = express();
const db = require("./database");
const bodyParser = require("body-parser");

const port = 3003;

/**
 * Faz o parse do que vem no corpo da requisição para o tipo Object
 * */
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * retorna um objeto específico do banco de dados local através do id
 */
app.get("/produtos/:id", (req, res) => {
  res.send(db.getProduct(req.params.id));
});

/**
 * Retorna a lista com todos os objetos do banco de dados local
 */
app.get("/produtos", (req, res) => {
  res.send(db.getProducts());
});

/**
 * Adiciona um objeto no banco de dados local
 */
app.post("/produtos", (req, res) => {
  res.send(
    db.saveProduct({
      name: req.body.name,
      price: req.body.price,
    })
  );
});

/**
 * Modifica um objeto do banco de dados local
 */
app.put("/produtos/:id", (req, res) => {
  res.send(
    db.saveProduct({
      id: req.params.id,
      name: req.body.name,
      price: req.body.price,
    })
  );
});

/**
 * Deleta um objeto do banco de dados local
 */
app.delete("/produtos/:id", (req, res) => {
  res.send(db.deleteProduct(req.params.id));
});

/**
 * Deleta todo o banco de dados local
 */
app.delete("/produtos", (req, res) => {
  res.send(db.deletedb());
});

/**
 * Fica escutando
 */
app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
