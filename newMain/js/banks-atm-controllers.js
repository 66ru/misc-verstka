angular.module('atmApp', ['ui.bootstrap'])
	.controller('BankListCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('data/atmlist.json').success(function(data) {
			$scope.atms = data;
		});
		$http.get('data/banklist.json').success(function(banks) {
			$scope.banks = banks;
			$scope.tpy = function() {
				$scope.selected = $scope.bankQuery;
			};
		});
	}]);
