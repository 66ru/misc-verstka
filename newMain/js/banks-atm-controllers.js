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
				}
			};

			$scope.hideThisBank = function(name) {
				var index = banksToShow.indexOf(name);
				if (name !== -1) {
					banksToShow.splice(index, 1);
				}
			};

			$scope.selectedBanks = function(elem) {
				if (banksToShow.length === 0) return true;
				return banksToShow.indexOf(elem.bank) >= 0;
			};

			$scope.bankTagShow = function(elem) {
				return banksToShow.indexOf(elem) >= 0;
			};

			$scope.showBanksLabel = function() {
				return banksToShow.length > 0;
			}
		});
	}])

	.directive('yamElem', function() {
		function link(scope, element, attrs) {
			var placemark;
			// scope.iindex = scope.$index;

			$(function() {
				ymaps.ready(function() {
					placemark = new ymaps.Placemark(scope.atm.coords, {
						iconContent: scope.$index + 1
					}, {
						preset: 'islands#darkGreenIcon',
						iconColor: '#587f02'
					});
					clusterer.add(placemark);

					element.on('click', function() {
						// map.setCenter(placemark.getCoordinates());
						console.log(placemark.properties.get('iconContent'));
					});

					// Make placemark label to correspond with label's index
					scope.$watch(function() {
						return scope.$index + 1 == placemark.properties.get('iconContent');
					}, function() {
						placemark.properties.set({iconContent: scope.$index + 1});
					});
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
