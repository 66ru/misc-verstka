	var map, clusterer, collection, doit, bang;
// (function() {
	// 'use strict';

var atmsApp = angular.module('atms', ['ui.bootstrap']);

atmsApp.controller('Ctrl', ['$scope', '$http', function ($scope, $http) {
	var atms,
		placemarks = [],
		filteredPlacemarks,
		clusteredPlacemarks,
		collectedPlacemarks,
		visiblePlacemarks,
		banksToShow = [];

	$scope.listedAtms = [];

	$scope.showThisBank = function() {
		if (!~banksToShow.indexOf($scope.bankQuery.name)) {
			banksToShow.push($scope.bankQuery.name);
		}

		filterPlacemarks();
	};

	$scope.hideThisBank = function(name) {
		var index = banksToShow.indexOf(name);
		if (name !== -1) {
			banksToShow.splice(index, 1);
		}

		filterPlacemarks();
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
	};

	$scope.visible = function(elem) {
		if (clusterer.getObjectState(elem).isClustered) return true;
	};

	$scope.splitPlacemarks = function() {
		var i, l = filteredPlacemarks.length,
			arr = [];

		clusteredPlacemarks = [];
		collectedPlacemarks = [];

		for (i=0; i<l; i++) {
			var bankName = filteredPlacemarks[i].atmData.bank;
			if ((bankName === 'Альфа-Банк') || (bankName === 'Уральский банк Сбербанка России') || (bankName === 'УБРиР')) {
				arr.push(filteredPlacemarks[i]);
			}
		}

		$scope.listedAtms = arr;
		clusterer.removeAll();
		collection.removeAll();
		clusterer.add(filteredPlacemarks);
	};


	function initPlacemarks() {
		var i, l = atms.length;

		for (i=0; i<l; i++) {
			var atm = atms[i];

			placemark = new ymaps.Placemark(atm.coords, {}, {
				iconLayout: 'default#image',
				iconImageHref: '/newMain/img/placemark_green.svg',
				iconImageSize: [27, 31],
				iconImageOffset: [-13, -31],
			});

			placemark.atmData = atm;

			placemarks.push(placemark);
		}

		filterPlacemarks();
	}


	function filterPlacemarks() {
		var i, l = placemarks.length;

		filteredPlacemarks = [];

		for (i=0; i<l; i++) {
			var bankName = placemarks[i].atmData.bank;
			if (!banksToShow.length || ~banksToShow.indexOf(bankName)) {
				filteredPlacemarks.push(placemarks[i]);
			}
		}

		$scope.$apply($scope.splitPlacemarks);
	}



	function updateList() {}

	function initMap() {
		map = new ymaps.Map ('map', {
			center: [56.841379, 60.603059],
			zoom: 14
		}, {
			minZoom: 12
		});

		map.events.add('boundschange', function(e) {
			var newZoom = e.get('newZoom');

			if (newZoom > 13) {
				clusterer.options.set({
					gridSize: 8,
					clusterIcons: [{
						href: 'img/clusterPlacemark.png',
						size: [8, 8],
						offset: [-4, -4]
					}],
				});
			} else {
				clusterer.options.set({
					gridSize: 32,
					clusterIcons: [{
						href: 'img/clusterPlacemark.png',
						size: [6, 6],
						offset: [-3, -3]
					}],
				});
			}

			$scope.splitPlacemarks();
			$scope.$digest();

			// console.log('zoom: ' + newZoom + ', grid: ' + clusterer.options.get('gridSize'));
		});


		var emptyClusterContentLayout = ymaps.templateLayoutFactory.createClass('');

		clusterer = new ymaps.Clusterer({
			gridSize: 8,
			hasBalloon: false,
			hasHint: false,
			// margin: 0,
			// viewportMargin: 0,
			clusterDisableClickZoom: false,
			openBalloonOnClick: false,
			minClusterSize: 1,
			preset: 'islands#invertedDarkGreenClusterIcons',
			clusterIcons: [{
				href: 'img/clusterPlacemark.png',
				size: [8, 8],
				offset: [-4, -4]
			}],
			clusterIconContentLayout: emptyClusterContentLayout
		});

		// clusterer.events.add('click', function(e) {
			// console.log(e);
			// clusterer.balloon.open(e.get('target'));
		// });

		collection = new ymaps.Clusterer({
			groupByCoordinates: true,
			gridSize: 8,
			hasBalloon: false,
			hasHint: false,
			clusterDisableClickZoom: false,
			openBalloonOnClick: false,
			minClusterSize: 1,
			preset: 'islands#invertedDarkGreenClusterIcons',
			clusterIcons: [{
				href: 'img/placemark_green.svg',
				size: [27, 31],
				offset: [-13, -31]
			}],
			// clusterIconContentLayout: emptyClusterContentLayout
		});

		map.geoObjects.add(clusterer);
		map.geoObjects.add(collection);
	}




	$http.get('data/atms.json').success(function(data) {
		atms = data;
	});

	$http.get('data/banks.json').success(function(banks) {
		$scope.banks = banks;
	});

	$(function() {
		// var $map = $('.map-list__map'),
		// 	$atms = $('.b-atms');

		// $map.height($(window).height() - $map.offset().top);
		// $atms.height($(window).height() - $atms.offset().top);

		ymaps.ready(function() {
			initMap();
			initPlacemarks();
		});
	});
}]);


atmsApp.directive('listed', function() {
	function link(scope, element, attrs) {
		var placemark = scope.atm;

		placemark.properties.set({iconContent: scope.$index + 1});

		clusterer.remove(placemark);
		collection.add(placemark);

		// This chunk of code supposes that ymaps is ready
		element.on('click', function() {
			$('.b-atms__atm_active').removeClass('b-atms__atm_active');
			$(this).addClass('b-atms__atm_active');
			// map.setCenter(placemark.geometry.getCoordinates(), 14, {
			// 	duration: 150
			// });
			// console.log(collection.getObjectState(placemark).cluster.getOverlay().options());//.options.set('clusterIcons', {
			// 	href: 'img/placemark_orange.svg',
			// 	size: [27, 31],
			// 	offset: [-13, -31]
			// });
		});

		// Make placemark label to correspond with label's index
		// scope.$watch(function() {
		// 	return scope.$index + 1 == placemark.properties.get('iconContent');
		// }, function() {
		// 	placemark.properties.set({iconContent: scope.$index + 1});
		// });

		element.on('$destroy', function() {
			clusterer.add(placemark);
			collection.remove(placemark);
		});
	}

	return {
		link: link
	};
});
