var Moloni = require('moloni');
var mensagem = require('./mensagem');

var moloni = new Moloni({
	client_id: 'isi601',
	client_secret: 'a48bbb18c3d112754f4877a531045694c3f1bf97',
	username: 'a85246@alunos.uminho.pt',
	password: 'ISI601transportadora'
});




module.exports = {
getproductID : getproductID,
getallproducts : getallproducts,
getallproductsubcat : getallproductsubcat,
insertcatgoria : insertcatgoria

}

function getproductID(req, res) {

	var teste;
	var id;
    var params1 = {
		company_id: 127055,
		product_id: 49474820
    }
    
    moloni.products('getOne', params1, function (error, result) {
	if (error){

		return console.error(error);

	} else {

		teste = result;
		id = result.product_id;
		//console.log(teste);
		res.send(id);
	}
	})

	
};


function getallproducts(req, res) {

	var teste;

    var params1 = {
        company_id: 127055
    }
    
    moloni.productCategories('getAll', params1, function (error, result) {
	if (error)
		return console.error(error);
		teste = result;
		console.log(teste);
		res.send(teste);
	})
};


function getallproductsubcat(req, res) {

	var teste;

    var params1 = {
		company_id: 127055,
		category_id: 2171132
    }
    
    moloni.products('getAll', params1, function (error, result) {
	if (error)
		return console.error(error);
		teste = result;
		console.log(teste);
		res.send(teste);
	})
};


function insertcatgoria(req, res){

	var teste;

	var params1 = {

	company_id: 127055,
	parent_id: 2171130,
	name: "Com Receita"


	}

	moloni.productCategories('insert', params1, function (error, result) {
		if (error)
			return console.error(error);
		teste = result;
		console.log(teste);
		res.send(teste);

})};
