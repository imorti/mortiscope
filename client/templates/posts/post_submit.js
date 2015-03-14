Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var post = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val()
		};

		Meteor.call('postInsert', post, function(error, result){
			//display error to the user
			if (error)
				return alter(error.reason);

			//show this result but route anyway
			
			if (result.postExists)
				alert('This link has already been posted');

			
		});	
		
		Router.go('postsList'); 
	}
}); 

