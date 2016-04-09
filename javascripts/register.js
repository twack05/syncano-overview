$('#register-submit').on('click', function() {
	var username = $('#username-register').val(),
		password = $('#password-register').val();
	connection.User.please().create({username: username, password: password, instanceName: instanceName})
		.then(function(result) {
			$('#register-message').text('User succesfully created! Check Users in your Syncano Dashboard.');
		})
		.catch(function(err) {
			$('#register-message').text('There was an error creating your user. Make sure you have a username and password and you have an API Key which allows user creation.');
		});
});

