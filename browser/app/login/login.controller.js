app.controller('loginCtrl',function($scope, loginFactory){
	$scope.submitLogin = function() {
		return loginFactory.verify($scope.credentials);
	}
	// $scope.submitLogin = function(){
	// 	console.log ($scope.email);
	// }
	//console.log(session);
	//console.log($scope.email);
})

