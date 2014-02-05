var atmsApp = angular.module('atms', ['ui.bootstrap']);

var ppp;

atmsApp.controller('Ctrl', ['$scope', '$http', function($scope, $http) {
	var initialListLimit = 20,
		listLimitStep = 20,

		banksFilter = [];

	$scope.listLimit = initialListLimit;
	$scope.filteredPlacemarks = [];

	$scope.mayRecompileList = true;

	$scope.bankQuery = {
		cashIn: false,
		isOpen: false
	};

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

	$scope.updateMap = function() {
		$scope.filterPlacemarks();

		// TODO: optimize this
		$scope.clusterer.removeAll();
		$scope.clusterer.add($scope.filteredPlacemarks);

		if ($scope.mayRecompileList) {
			$scope.recompileList();
		}
	};

	$scope.recompileList = function() {
		var i, l = $scope.filteredPlacemarks.length,
			bounds = $scope.map.getBounds();

		$scope.listedPlacemarks = [];
		$scope.resetListLimit();

		for (i=0; i<l; i++) {
			var pl = $scope.filteredPlacemarks[i];

			if (isInBounds(pl.geometry.getCoordinates(), bounds)) {
				$scope.listedPlacemarks.push(pl);
			}
		}
	};

	/**
	 * Returns true if banksFilter is empty or the placemark is of selected bank.
	 * @param  {Placemark} pl — Placemark to test.
	 * @return {Boolean}
	 */
	function okBankName(pl) {
		return !banksFilter.length || ~banksFilter.indexOf(pl.atmData.bank);
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
		return (coords[0] > bounds[0][0] + 0.002) && (coords[0] < bounds[1][0] - 0.002) &&
			(coords[1] > bounds[0][1] + 0.002) && (coords[1] < bounds[1][1] - 0.002);
	}
}]);

atmsApp.directive('atmMap', function() {
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

			var collectionOptions = {
				groupByCoordinates: true,
				gridSize: 8,
				minClusterSize: 1,
				clusterIcons: [{
					href: 'img/placemark_green.svg',
					size: [27, 31],
					offset: [-13, -31]
				}],
				viewportMargin: 0,
				clusterDisableClickZoom: true,
				openBalloonOnClick: true,
				zIndex: 999
			};

			scope.map = initMap();

			scope.clusterer = new ymaps.Clusterer(clustererOptions);
			scope.collection = new ymaps.GeoObjectCollection({}, {
				// hasBalloon: false,
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
			});

			scope.clusterer.events.add('balloonopen', function(e) {
				scope.mayRecompileList = false;
			});

			scope.clusterer.events.add('balloonclose', function(e) {
				scope.mayRecompileList = true;
			});

			scope.collection.events.add('balloonopen', function(e) {
				scope.mayRecompileList = false;
			});

			scope.collection.events.add('balloonclose', function(e) {
				scope.mayRecompileList = true;
			});
		});

		function initMap() {
			var map = new ymaps.Map (element.attr('id'), {
				center: [56.841379, 60.603059],
				zoom: 14
			}, {
				autoFitToViewport: 'always',
				maxZoom: 16,
				minZoom: 12
			});

			addControls(map);
			return map;
		}

		function initPlacemarks() {
			var i, l = scope.atms.length;
			scope.allPlacemarks = [];

			for(i=0; i<l; i++) { //dev
				var atm = scope.atms[i];
				var placemark = new ymaps.Placemark(atm.coords, {
					balloonContentBody: compileContentBody(atm),
					clusterCaption: atm.bank
				}, {});

				placemark.atmData = atm;
				scope.allPlacemarks.push(placemark);
			}

			scope.$apply(scope.updateMap);
		}

		function compileContentBody(atm) {
			return '<p class="b-atms__bank">' + atm.bank + '</p>\
					<p class="b-atms__address">' + atm.address + '</p>\
					<p class="b-atms__time">' + scope.parseWorktime(atm.workTime) + '</p>\
					<p class="b-atms__currency"><span class="b-atms__label">Валюта:</span> <span class="b-atms__rub">рубли</span>' + scope.parseCurrency(atm.currency) + '<b class="b-atms__b">' + (atm.cashIn ? ', Cash-in' : '') + '</b></p>\
					<p class="b-atms__address">' + '8-800-2000-600&nbsp;&nbsp;&nbsp;&nbsp;<a href="http:/66.ru/go/htpp://66.ru/">www.66.ru</a>' + '</p>';
		}
	}

	return {
		link: link
	};
});

atmsApp.directive('atmListElem', function() {
	function link(scope, element, attrs) {
		var placemark = scope.placemark;

		placemark.properties.set({iconContent: scope.$index + 1});
		if (scope.$index == 1) ppp = placemark;

		scope.clusterer.remove(placemark);
		scope.collection.add(placemark);

		element.on('$destroy', function() {
			scope.clusterer.add(placemark);
			scope.collection.remove(placemark);
		});

		element.on('click', function() {
			$('.b-atms__atm_active').removeClass('b-atms__atm_active');
			element.addClass('b-atms__atm_active');

			var balloon = placemark.balloon;
			if (!balloon.isOpen()) {
				balloon.open();
			} else {
				balloon.close();
			}
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
