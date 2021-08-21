const express = require("express");
const axios = require("axios");
const app = express();
var cors = require('cors')
const port = 3000;
const mongoose = require("./configs/db");
const End = require("./models/end");

app.use(cors())

app.get("/:cep", async (req, res) => {
  const ceps = req.params.cep;
  //Chamar DB antes
  existe = await End.exists({ cep: ceps });
  if (existe == false) {
    dados = await axios.get("https://viacep.com.br/ws/" + ceps + "/json");
    //Enviar dados.data para o db se n existir
    await End.create(dados.data);
    res.send(dados.data);
  } else {
    dados = await End.findOne({cep: ceps});
    res.send(dados);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
