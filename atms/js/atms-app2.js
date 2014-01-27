var atmsApp = angular.module('atms', []);

atmsApp.controller('Ctrl', ['$scope', '$http', function($scope, $http) {
	var initialListLimit = 10,
		listLimitStep = 10;

	$http.get('data/atms.json').success(function(data) {
		$scope.atms = data;
	});

	$scope.listLimit = initialListLimit;

	$scope.resetListLimit = function() {
		$scope.listLimit = initialListLimit;
	};

	$scope.increaseListLimit = function() {
		$scope.listLimit += listLimitStep;
	};

	$scope.parseWorkTime = function(str) {
		return str ? str : 'Круглосуточно';
		// if (Object.prototype.toString.call(str) === '[object Array]') {}
	};

	$scope.parseCurrency = function(str) {
		return str ? ', ' + str : '';
	};

	$scope.filterPlacemarks = function() {
		$scope.filteredPlacemarks = $scope.allPlacemarks;
	};

	$scope.updatePlacemarks = function() {
		$scope.commonClusterer.add($scope.filteredPlacemarks);
	};

	$scope.updateList = function() {
		var i, l = $scope.allPlacemarks.length;
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
				clusterIconContentLayout: ymaps.templateLayoutFactory.createClass('')
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

				scope.$apply(scope.updateList);

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

			for(i=0; i<l; i++) {
				var atm = scope.atms[i];
				var placemark = new ymaps.Placemark(atm.coords);

				placemark.atmData = atm;
				scope.allPlacemarks.push(placemark);
			}

			scope.filterPlacemarks();
			scope.updatePlacemarks();
			scope.$apply(scope.updateList);
		}
	}

	return {
		link: link
	};
});

atmsApp.directive('atmListElem', function() {
	function link(scope, element, attrs) {
		var placemark = scope.placemark;

		scope.commonClusterer.remove(placemark);
		scope.specialClusterer.add(placemark);

		element.on('$destroy', function() {
			scope.commonClusterer.add(placemark);
			scope.specialClusterer.remove(placemark);
		});
	}

	return {
		link: link
	};
});
