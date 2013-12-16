var atmApp = angular.module('atmApp', []);

atmApp.controller('ATMListCtrl', function ($scope, $http) {
	$http.get('data/atmlist.json').success(function(data) {
		$scope.atms = data;
	});
});
