$('#script-submit').on('click', function() {
	var config = {instanceName: localStorage.instanceName, name: "sum"},
		data = {x: parseInt($('#first-number').val()) , y: parseInt($('#second-number').val())};
	connection.ScriptEndpoint.please().run(config, data)
	.then(function(response) {
		$('#script-message').text(data.x + " + " + data.y + " equals " + response.result.stdout + ".");
	})
	.catch(function(err) {
		$('#script-message').text('There was an error running your Script');
	});
});