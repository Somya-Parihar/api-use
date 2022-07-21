const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://dad-jokes.p.rapidapi.com/random/joke",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "b223f344e4msh676ae406cae4895p133982jsn00620b979240",
		"X-RapidAPI-Host": "dad-jokes.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
	console.log(response.body[0].setup)
	var setup = response.body[0].setup;
	var punchline = response.body[0].punchline;
	$('#joke').append(setup+'<br>'+punchline);
});
