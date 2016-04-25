$('#login-submit').on('click', function() {
	var username = $('#username-login').val(),
		password = $('#password-login').val();
	connection.User.please().login({instanceName: instanceName}, {username: username, password: password}).then(function(result) {
		$('#login-message').text('User succesfully signed in! User Key is ' + result.user_key +'. You can pass the User Key into future calls to the Syncano API to make sure that users can only manage data in your app under the permissions you have outlined in the Syncano Dashboard.');
	})
	.catch(function(err) {
		$('#login-message').text('There was an error signing in your User. Please try again.');
	});
});