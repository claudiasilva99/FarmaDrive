var Moloni = require('moloni');
var mensagem = require('./mensagem');

var moloni = new Moloni({
	client_id: 'isi601',
	client_secret: 'a48bbb18c3d112754f4877a531045694c3f1bf97',
	username: 'a85246@alunos.uminho.pt',
	password: 'ISI601transportadora'
});


module.exports = {
    fatura : fatura,
	getallfaturas: getallfaturas,
	pdf : pdf,
	teste90: teste90
}



function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

	return [year, month, day].join('-');
	

}



function teste90 (req, res){
var teste;
	  teste = req.body;
	  console.log(teste);
	  res.send(teste);

}

//-________________________________fatura_______________
function fatura(req, res) {

	var teste;



    var params1 = {

		company_id: 127055,
		date: formatDate(),
		expiration_date: formatDate(),
		document_set_id: 269107,
		customer_id: req.body.customer_id,//25776722,



		products: req.body.products, /*[ { product_id: 49474820, 
				   	 name: "benuron 500ml", 
				     qty: 5, 
					 price: 2,
					 taxes: [{
						 tax_id: 1925342
					 		}]
					 		
					}

				 ],*/
		status: 1
	


    }
    
    moloni.invoices('insert', params1, function (error, result) {
	if (error)


		return console.error(error);

		teste = result;

		teste1 = {
			id_fatura : teste.document_id
		}

		console.log(teste);

		res.send(teste1);



	})
};



function pdf(req, res){

	var pdf = {
		company_id: 127055,
		document_id: req.body.document_id//314920926

	};

moloni.documents('getPDFLink', pdf, function (error, result) {
	if (error) return console.error(error);

	console.log(result);

	res.send(result.url)


})};



function getallfaturas(req, res) {

	var teste;

    var params1 = {
		company_id: 127055,
    }
    
    moloni.invoices('getAll', params1, function (error, result) {
	if (error)
		return console.error(error);
		teste = result;
		console.log(teste);
		res.send(teste);
	})
};

