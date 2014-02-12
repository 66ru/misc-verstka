var atmsApp = angular.module('atms', ['ui.bootstrap']);

atmsApp.factory('listSettings', function() {
	return {
		initialListLimit: 20,
		listLimitStep: 20
	};
});

atmsApp.factory('mapSettings', function() {
	return {
		placemarkOptions: {
			iconLayout: 'default#imageWithContent',
			iconImageHref: 'img/placemark_green.svg',
            iconImageSize: [27, 31],
            iconImageOffset: [-13, -31]
		}
	};
});

atmsApp.controller('Ctrl', ['$scope', '$http', '$location', 'listSettings', function($scope, $http, $location, listSettings) {

	$scope.$location = $location;

	var banksFilter = [];

	$scope.listLimit = listSettings.initialListLimit;
	$scope.filteredPlacemarks = [];

	$scope.mayRecompileList = true;

	$scope.bankQuery = {
		cashIn: $location.search().cashin ? ($location.search().cashin !== 'false') : false,
		isOpen: $location.search().isopen ? ($location.search().isopen !== 'false') : true
	};

	$http.get('data/atms.json').success(function(data) {
		$scope.atms = data;
	});

	$http.get('data/banks.json').success(function(banks) {
		$scope.banks = banks;
	});

	$scope.resetListLimit = function() {
		// if ($scope.map.getZoom() === 16) {
			// $scope.listLimit = 99;
		// } else {
			$scope.listLimit = listSettings.initialListLimit;
		// }
	};

	$scope.increaseListLimit = function() {
		if ($scope.listLimit + listSettings.listLimitStep <= 99) {
			$scope.listLimit += listSettings.listLimitStep;
		} else {
			$scope.listLimit = 99;
		}
	};

	$scope.workingNowClass = function(isOpen) {
		return isOpen ? '' : 'b-atms__time_off-time_yes';
	};

	/**
	 * Returns worktime of atm.
	 * @param  {String} [str] — Worktime description.
	 * @return {String} Returns passed string or string for 24-hour work if str is undefined.
	 */
	$scope.parseWorktime = function(str) {
		return str ? str : 'Круглосуточно';
	};

	/**
	 * Returns currencies string.
	 * @param  {String} [str] — Currencies that the atm supports.
	 * @return {String} Returns comma-separated list of currencies.
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

	/** Fill filteredPlacemarks with those ones which satisfy filter criteria. */
	$scope.filterPlacemarks = function() {
		var i, l = $scope.allPlacemarks.length;
		$scope.filteredPlacemarks = [];

		for (i=0; i<l; i++) {
			var pl = $scope.allPlacemarks[i];

			if (okBankName(pl) && okCashIn(pl) && okWorkTime(pl)) {
				$scope.filteredPlacemarks.push(pl);
			}
		}
	};

	// TODO: refactor this shit
	$scope.updateMap = function() {
		$scope.filterPlacemarks();
		$location.search('banks', banksFilter.join(','));
		$location.search('cashin', $scope.bankQuery.cashIn);
		$location.search('isopen', $scope.bankQuery.isOpen);

		$scope.clusterer.removeAll();
		$scope.clusterer.add($scope.filteredPlacemarks);

		if ($scope.mayRecompileList) {
			$scope.recompileList();
		}
	};

	$scope.arrangePlacemarks = function() {
		var i, j, k, m,
			l = $scope.listedPlacemarks.length,
			map = $scope.map,
			convert = map.converter,
			projection = map.options.get('projection'),
			sameplaced;

		for (i=0; i<l; i++) {
			sameplaced = [];
			sameplaced.push($scope.listedPlacemarks[i]);

			if (!$scope.listedPlacemarks[i].isMarked) {
				for (j=i+1; j<l; j++) {
					if (($scope.listedPlacemarks[i].atmData.coords[0] == $scope.listedPlacemarks[j].atmData.coords[0]) && ($scope.listedPlacemarks[i].atmData.coords[1] == $scope.listedPlacemarks[j].atmData.coords[1])) {
						$scope.listedPlacemarks[j].isMarked = true;
						sameplaced.push($scope.listedPlacemarks[j]);
					}
				}
			}

			m = sameplaced.length;
			if (m > 1) {

				for (k=1; k<m; k++) {
					var pl = sameplaced[k],
						x = pl.atmData.coords[0],
						y = pl.atmData.coords[1],

						pageCoords = convert.globalToPage(
							projection.toGlobalPixels(
								[x, y],
								map.getZoom()
							)
						),

						newGlobalCoords = projection.fromGlobalPixels(
							convert.pageToGlobal([
								pageCoords[0] - Math.sin(Math.PI * 2 / 10 * (m - k)) * 30,
								pageCoords[1] - Math.cos(Math.PI * 2 / 10 * (m - k)) * 30
							]),
							map.getZoom()
						);

					pl.geometry.setCoordinates(newGlobalCoords);
				}
			}
		}
	};

	$scope.recompileList = function() {
		var i, l = $scope.filteredPlacemarks.length,
			bounds = $scope.map.getBounds();

		$scope.listedPlacemarks = [];
		$scope.resetListLimit();

		for (i=0; i<l; i++) {
			var pl = $scope.filteredPlacemarks[i];

			pl.atmData.index = i;

			if (isInBounds(pl.geometry.getCoordinates(), bounds)) {
				$scope.listedPlacemarks.push(pl);
			}
		}

		$scope.arrangePlacemarks();
	};

	/**
	 * Returns true if banksFilter is empty or the placemark is of selected bank.
	 * @param  {Placemark} pl — Placemark to test.
	 * @return {Boolean}
	 */
	function okBankName(pl) {
		return !banksFilter.length || ~banksFilter.indexOf(pl.atmData.name);
	}

	function okCashIn(pl) {
		return !$scope.bankQuery.cashIn || pl.atmData.cashIn;
	}

	function okWorkTime(pl) {
		return !$scope.bankQuery.isOpen || pl.atmData.isOpen;
	}

	/**
	 * Returns true if given coordinates are in bounds of map.
	 * @param  {Array}  coords — Coordinates to test.
	 * @param  {Array}  bounds — Bounds of the map.
	 * @return {Boolean}  true if coordinates are in bounds.
	 */
	function isInBounds(coords, bounds) {
		var z = $scope.map.getZoom();
		return (coords[0] > bounds[0][0] + (0.01/z)) && (coords[0] < bounds[1][0] - (0.01/z)) &&
			(coords[1] > bounds[0][1] + (0.01/z)) && (coords[1] < bounds[1][1] - (0.01/z));
	}
}]);

atmsApp.directive('atmMap', ['mapSettings', function(mapSettings) {
	function link(scope, element, attrs) {
		ymaps.ready(function() {
			var clustererOptions = {
				gridSize: 16,
				minClusterSize: 1,
				clusterIcons: [{
					href: 'img/clusterPlacemark.png',
					size: [10, 10],
					offset: [-4, -4]
				}],
				clusterIconContentLayout: ymaps.templateLayoutFactory.createClass(''),
				viewportMargin: 0,
				clusterDisableClickZoom: true,
				openBalloonOnClick: true,
			};

			scope.map = initMap();

			scope.clusterer = new ymaps.Clusterer(clustererOptions);
			scope.collection = new ymaps.GeoObjectCollection({}, {
				hasHint: false,
				zIndex: 999
			});
			scope.map.geoObjects.add(scope.clusterer);
			scope.map.geoObjects.add(scope.collection);

			initPlacemarks();

			scope.map.events.add('boundschange', function(e) {
				var newZoom = e.get('newZoom'),
					oldZoom = e.get('oldZoom');

				if (newZoom !== oldZoom) {
					scope.clusterer.options.set(changeLayout(newZoom));
				}

				if (scope.mayRecompileList) {
					scope.$apply(scope.recompileList);
				}

				scope.$apply(function() {
					scope.$location.search('lat', scope.map.getCenter()[0]);
					scope.$location.search('long', scope.map.getCenter()[1]);
					scope.$location.search('zoom', scope.map.getZoom());
				});
			});

			scope.clusterer.events.add('balloonopen', function() {
				scope.mayRecompileList = false;
			});

			scope.clusterer.events.add('balloonclose', function() {
				scope.mayRecompileList = true;
				// scope.$apply(scope.recompileList);
			});

			scope.collection.events.add('balloonopen', function(e) {
				scope.mayRecompileList = false;
				$('.b-atms__atm').eq(scope.listedPlacemarks.indexOf(e.get('target'))).addClass('b-atms__atm_active');
				console.log(e);
			});

			scope.collection.events.add('balloonclose', function() {
				scope.mayRecompileList = true;
				// $('.b-atms__atm_active').removeClass('b-atms__atm_active');
				// scope.$apply(scope.recompileList);
			});

			function initMap() {
				var map = new ymaps.Map (element.attr('id'), {
					center: [
						scope.$location.search().lat || 56.841379,
						scope.$location.search().long || 60.603059
					],
					zoom: scope.$location.search().zoom || 14,
					controls: []
				}, {
					autoFitToViewport: 'always',
					maxZoom: 16,
					minZoom: 12
				});

				addControls(map);
				return map;
			}
		});

		function initPlacemarks() {
			var i, l = scope.atms.length;
			scope.allPlacemarks = [];

			for(i=0; i<l; i++) {
				var atm = scope.atms[i];
				var placemark = new ymaps.Placemark(atm.coords, {
					balloonContentBody: compileContentBody(atm),
					clusterCaption: atm.name
				}, mapSettings.placemarkOptions);

				placemark.atmData = atm;
				scope.allPlacemarks.push(placemark);
			}

			scope.$apply(scope.updateMap);
		}

		function compileContentBody(atm) {
			return '<p class="b-atms__bank">' + atm.name + '</p>\
					<p class="b-atms__address">' + atm.address + '</p>\
					<p class="b-atms__time">' + scope.parseWorktime(atm.workTime) + '</p>\
					<p class="b-atms__currency"><span class="b-atms__label">Валюта:</span> <span class="b-atms__rub">рубли</span>' + scope.parseCurrency(atm.currency) + '<b class="b-atms__b">' + (atm.cashIn ? ' Cash-in' : '') + '</b></p>\
					<p class="b-atms__address">' + scope.banks[atm.bank].phone + '&nbsp;&nbsp;&nbsp;&nbsp;' + '<a href="' + scope.banks[atm.bank].href + '">' + scope.banks[atm.bank].href.replace(/^(http|https):\/\//, '') + '</a></p>';
		}
	}

	return {
		link: link
	};
}]);

atmsApp.directive('atmListElem', function() {
	function link(scope, element, attrs) {
		var pl = scope.placemark;

		pl.properties.set({iconContent: scope.$index + 1});
		scope.$watch('$index', function() {
			pl.properties.set({iconContent: scope.$index + 1});
		});

		scope.$watch('listedPlacemarks', function() {
			if (scope.filteredPlacemarks.indexOf(pl) !== -1) {
				scope.clusterer.remove(pl);
			}
		});

		scope.clusterer.remove(pl);
		scope.collection.add(pl);

		element.on('$destroy', function() {
			pl.geometry.setCoordinates(pl.atmData.coords);
			scope.collection.remove(pl);
			if (scope.filteredPlacemarks.indexOf(pl) !== -1) {
				scope.clusterer.add(pl);
			}
		});

		element.on('click', function() {
			$('.b-atms__atm_active').removeClass('b-atms__atm_active');
			element.addClass('b-atms__atm_active');

			var balloon = pl.balloon;
			if (balloon.isOpen()) {
				balloon.close();
				element.removeClass('b-atms__atm_active');
			} else {
				balloon.open();
			}
		});

		element.on('mouseenter', function() {
			pl.options.set('iconImageHref', 'img/placemark_orange.svg');
		});

		element.on('mouseleave', function() {
			pl.options.set('iconImageHref', 'img/placemark_green.svg');
		});
	}

	return {
		link: link
	};
});

function addControls(map) {
	map.controls.add('rulerControl');
	map.controls.add('trafficControl');
	map.controls.add('zoomControl');
	map.controls.add('fullscreenControl');
	map.controls.add(new ymaps.control.GeolocationControl({
		options: {
			float: 'none',
			position: {
				top: 70,
				left: 10
			}
		}
	}));
}

function changeLayout(newZoom) {
	var newOptions = {};

	if (newZoom > 13) {
		newOptions.gridSize = 16;
		newOptions.clusterIcons = [{
			href: 'img/clusterPlacemark.png',
			size: [10, 10],
			offset: [-4, -4]
		}];
	} else {
		newOptions.gridSize = 32;
		newOptions.clusterIcons = [{
			href: 'img/clu.png',
			size: [24, 24],
			offset: [-12, -12]
		}];
	}

	return newOptions;
}
