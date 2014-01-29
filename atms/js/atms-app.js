var atmsApp = angular.module('atms', ['ui.bootstrap']);

atmsApp.controller('Ctrl', ['$scope', '$http', function($scope, $http) {
	var initialListLimit = 10,
		listLimitStep = 10,

		banksFilter = [];

	$scope.listLimit = initialListLimit;
	$scope.placemarksDiff = [];

	$http.get('data/atms.json').success(function(data) {
		$scope.atms = data;
	});

	$http.get('data/banks.json').success(function(banks) {
		$scope.banks = banks;
	});

	$scope.resetListLimit = function() {
		$scope.listLimit = initialListLimit;
	};

	$scope.increaseListLimit = function() {
		$scope.listLimit += listLimitStep;
	};

	/**
	 * Return worktime of atm.
	 * @param  {string} [str] — Worktime description.
	 * @return {string} Returns passed string or string for 24-hour work if str is undefined.
	 */
	$scope.parseWorktime = function(str) {
		return str ? str : 'Круглосуточно';
	};

	/**
	 * Return currencies string.
	 * @param  {string} [str] — Currencies that the atm supports.
	 * @return {string} Returns comma-separated list of currencies.
	 */
	$scope.parseCurrency = function(str) {
		return str ? str.replace('$', ', $')
						.replace('e', ', €') : '';
	};


	$scope.addBankToFilter = function() {
		if (!~banksFilter.indexOf($scope.bankQuery.name)) {
			banksFilter.push($scope.bankQuery.name);
		}
	};

	$scope.showBanksLabel = function() {
		return banksFilter.length;
	};

	$scope.showBankTag = function(bankName) {
		return ~banksFilter.indexOf(bankName);
	};

	$scope.hideBankTag = function(bankName) {
		var index = banksFilter.indexOf(bankName);
		if (bankName !== -1) {
			banksFilter.splice(index, 1);
		}
	};


	/**
	 * Fill filteredPlacemarks with those ones which satisfy filter criteria.
	 */
	$scope.filterPlacemarks = function() {
		// var i, l = $scope.allPlacemarks.length;

		// if (!banksFilter.length) {
			$scope.filteredPlacemarks = $scope.allPlacemarks;
		// 	return;
		// }

		// for (i=0; i<l; i++) {
		// 	var placemark = $scope.allPlacemarks[i];

		// 	if (!~banksFilter.indexOf(placemark.atmData.bank)) {
		// 		$scope.filteredPlacemarks.push(placemark);
		// 	}
		// }
	};

	$scope.updateMap = function() {
		$scope.filterPlacemarks();
		$scope.recompileList();
	};

	$scope.recompileList = function() {
		// TODO: optimize this
		$scope.commonClusterer.removeAll();
		$scope.commonClusterer.add($scope.filteredPlacemarks);

		var i, l = $scope.filteredPlacemarks.length;
		$scope.placemarksList = [];
		$scope.resetListLimit();


		for (i=0; i<l; i++) {
			if ($scope.commonClusterer.getObjectState($scope.filteredPlacemarks[i]).isClustered) {
				$scope.placemarksList.push($scope.filteredPlacemarks[i]);
			}
		}
	};
}]);

atmsApp.directive('atmMap', function() {
	function link(scope, element, attrs) {
		ymaps.ready(function() {
			var commonClustererOptions = {
				gridSize: 8,
				minClusterSize: 1,
				clusterIcons: [{
					href: 'img/clusterPlacemark.png',
					size: [8, 8],
					offset: [-4, -4]
				}],
				clusterIconContentLayout: ymaps.templateLayoutFactory.createClass(''),
				viewportMargin: -200
			};

			var specialClustererOptions = {
				groupByCoordinates: true,
				gridSize: 8,
				minClusterSize: 1,
				clusterIcons: [{
					href: 'img/placemark_green.svg',
					size: [27, 31],
					offset: [-13, -31]
				}],
			};

			scope.map = initMap();

			scope.commonClusterer = addClusterer(commonClustererOptions);
			scope.specialClusterer = addClusterer(specialClustererOptions);
			scope.map.geoObjects.add(scope.commonClusterer);
			scope.map.geoObjects.add(scope.specialClusterer);

			initPlacemarks();

			scope.map.events.add('boundschange', function(e) {
				var newZoom = e.get('newZoom'),
					oldZoom = e.get('oldZoom');

				if (newZoom !== oldZoom) {
					changeGrid();
				}

				scope.$apply(scope.recompileList);

				function changeGrid() {
					if (newZoom > 13) {
						scope.commonClusterer.options.set({
							gridSize: 8,
							clusterIcons: [{
								href: 'img/clusterPlacemark.png',
								size: [8, 8],
								offset: [-4, -4]
							}],
						});
					} else {
						scope.commonClusterer.options.set({
							gridSize: 32,
							clusterIcons: [{
								href: 'img/clusterPlacemark.png',
								size: [6, 6],
								offset: [-3, -3]
							}],
						});
					}
				}
			});
		});

		function initMap() {
			return new ymaps.Map (element.attr('id'), {
				center: [56.841379, 60.603059],
				zoom: 14
			}, {
				minZoom: 12
			});
		}

		function addClusterer(options) {
			return new ymaps.Clusterer(options);
		}

		function initPlacemarks() {
			var i, l = scope.atms.length;
			scope.allPlacemarks = [];

			for(i=0; i<100; i++) { //dev
				var atm = scope.atms[i];
				var placemark = new ymaps.Placemark(atm.coords);

				placemark.atmData = atm;
				placemark.atmData.index = i;
				scope.allPlacemarks.push(placemark);
			}

			scope.$apply(scope.updateMap);
		}
	}

	return {
		link: link
	};
});

atmsApp.directive('atmListElem', function() {
	function link(scope, element, attrs) {
		var placemark = scope.placemark,
			index = placemark.atmData.index;

		scope.commonClusterer.remove(placemark);
		scope.specialClusterer.add(placemark);
		scope.placemarksDiff.push(index);

		element.on('$destroy', function() {
			scope.commonClusterer.add(placemark);
			scope.specialClusterer.remove(placemark);
			scope.placemarksDiff.splice(scope.placemarksDiff.indexOf(index), 1);
		});
	}

	return {
		link: link
	};
});
