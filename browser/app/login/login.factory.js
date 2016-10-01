app.factory('loginFactory', function($http, $state){
	var loginFactory = {};

	loginFactory.verify = function(credentials){
		return $http.post('/login', credentials)
			.then (function(result){
				if (result.status == 204){
					$state.go('stories');
				}	
			})
			.catch(function(err) {
				console.log(err);
			});
	}

	return loginFactory;
})
