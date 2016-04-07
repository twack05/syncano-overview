$('#crud').on('click', function() {
	connection.DataObject.please().list({instanceName: localStorage.instanceName, className: 'comment'}).then(function(result) {
		result.forEach(function(item) {
			$('.comments').append("<h5>" + item.title + "</h5><p>"+ item.body + "</p>");
		});
	})
	.catch(function() {
		$('.comments').append("<p>There was an error retrieving your comments.</p>");
	});
});

$('#crud-submit').on('click', function() {
	var newPost = {instanceName: localStorage.instanceName, className: 'comment', title: $('#crud-title').val(), body: $('#crud-body').val()}
	connection.DataObject.please().create(newPost).then(function(result) {
		$('.comments').append("<h5>" + result.title + "</h5><p>"+ result.body + "</p>");
	})
	.catch(function(err) {
		$('.comments').append("<p>There was an error adding your comment.</p>");
	});
});