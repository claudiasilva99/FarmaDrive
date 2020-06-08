var Moloni = require('moloni');
var mensagem = require('./mensagem');

var moloni = new Moloni({
	client_id: 'isi601',
	client_secret: 'a48bbb18c3d112754f4877a531045694c3f1bf97',
	username: 'a85246@alunos.uminho.pt',
	password: 'ISI601transportadora'
});


module.exports = {
	getallcostumers : getallcostumers,
	insertCostumer:insertCostumer,
	getcostumerID : getcostumerID,

}



function getcostumerID(req, res) {

    var params1 = {
		company_id: 127055,
		costumer_id: 25177754
    }
    
    moloni.customers('getOne', params1, function (error, result) {
	if (error){
		return console.error(error);

	} else {

		console.log(result);
		res.send(result);
	}
	})

	res.send("teste")
};




function getallcostumers(req, res) {

	var teste;

    var params1 = {
        company_id: 127055
    }
    
    moloni.customers('getAll', params1, function (error, result) {
	if (error)
		return console.error(error);

		teste = result;
		console.log(teste);
		res.send(teste);
	})
};




function insertCostumer(req, res){
	var teste;

	var num = req.body.num //"918206229"

	var params1 = {

		company_id: 127055,
		vat: req.body.vat,//"506920488",
		number: num,
		name: req.body.name, //"Claudia",
		language_id: 1,
		address: req.body.address,//"Rua da Peneda 10",
		city: req.body.city, //"Porto",
		zip_code: req.body.zip_code,
		country_id: 1,//0,
		maturity_date_id: 1,
		copies: {document_type_id: 1, copies: 1},
		payment_method_id: 818516,
		salesman_id: 0,
		discount: 0,
		credit_limit: 0,
		payment_day: 0,
		delivery_method_id: 0


	}

	moloni.customers('insert', params1, function (error, result) {
		if (error)
			return console.error(error);
		teste = result;
		console.log(teste);
		res.send(teste);
		var obj = JSON.stringify(teste.customer_id);
		mensagem.sendM(num, obj);

})};











