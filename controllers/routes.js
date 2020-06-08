const app = require('../server');

const costumers = require("../moloni/costumers");

app.post('/getall', costumers.getall);