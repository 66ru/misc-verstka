angular.module('atms', ['ui.bootstrap'])

	.controller('Ctrl', ['$scope', '$http', function ($scope, $http) {
		var banksToShow = [];

		$http.get('data/atms.json').success(function(data) {
			$scope.atms = data;
		});
		$http.get('data/banks.json').success(function(banks) {
			$scope.banks = banks;
			$scope.showThisBank = function() {
				if (!~banksToShow.indexOf($scope.bankQuery.name)) {
					banksToShow.push($scope.bankQuery.name);
					console.log(banksToShow);
				}
			};

			$scope.selectedBanks = function(elem) {
				if (banksToShow.length === 0) return true;
				return banksToShow.indexOf(elem.bank) >= 0;
			};
		});
	}])

	.directive('yamElem', function() {
		function link(scope, element, attrs) {
			var placemark;

			$(function() {
				ymaps.ready(function() {
					placemark = new ymaps.Placemark(scope.atm.coords, {
						iconContent: scope.$index + 1
					}, {
						preset: 'islands#darkGreenIcon',
						iconColor: '#587f02'
					});
					clusterer.add(placemark);
				});
			});

			element.on('$destroy', function() {
				clusterer.remove(placemark);
			});
		}

		return {
			link: link
		};
	});
