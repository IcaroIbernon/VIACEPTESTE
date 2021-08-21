var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

const endSchema = new Schema({
    cep: {
      type: "String",
    },
    logradouro: {
      type: "String",
    },
    complemento: {
      type: "String",
    },
    bairro: {
      type: "String",
    },
    localidade: {
      type: "String",
    },
    uf: {
      type: "String",
    },
    ibge: {
      type: "Number",
    },
    gia: {
      type: "Number",
    },
    ddd: {
      type: "Number",
    },
    siafi: {
      type: "Number",
    },
  });

module.exports = mongoose.model('End', endSchema );