$('#solution-submit').on('click', function() {
	var config = {instanceName: localStorage.instanceName, name: "send_email"},
		data = {to: $('#to').val(), subject: $('#subject').val(), text: $('#text').val()};
	connection.ScriptEndpoint.please().run(config, data)
		.then(function(response) {
			$('#solution-message').text("Email sent");
		})
		.catch(function(err) {
			$('#solution-message').text('There was an error sending your email');
		});
});