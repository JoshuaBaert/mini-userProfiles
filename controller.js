angular.module('userProfiles').controller('MainController', function ($scope, mainService) {
	
	$scope.thisAppIsBroken = "This angular app is working";
	
	$scope.getUsers = function () {
		return mainService.getUsers();
	};
	$scope.users = $scope.getUsers();
	$scope.toggleFavorite = mainService.toggleFavorite;
	
});