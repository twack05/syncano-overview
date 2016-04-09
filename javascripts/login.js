$('#login-submit').on('click', function() {
	var username = $('#username-login').val(),
		password = $('#password-login').val();
	connection.User.please().login({instanceName: instanceName}, {username: username, password: password})
		.then(function(result) {
			$('#login-message').text('User succesfully signed in! User Key is ' + result.user_key +'.');
			// connection = new Syncano({apiKey: apiKey, userKey: result.user_key});
		})
		.catch(function(err) {
			$('#login-message').text('There was an error signing in your User. Please try again.');
		});
});