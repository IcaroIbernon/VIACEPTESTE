const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/:cep", async (req, res) => {
  const cep = req.params.cep;
  dados = await axios.get("https://viacep.com.br/ws/"+cep+"/json");
  console.log(dados.data)
  res.send(dados.data)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
