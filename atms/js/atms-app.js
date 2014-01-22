	var map, clusterer, collection;
(function() {
	// 'use strict';

	angular.module('atms', ['ui.bootstrap'])

		.controller('Ctrl', ['$scope', '$http', function ($scope, $http) {
			var atms,
				placemarks = [],
				filteredPlacemarks,
				clusteredPlacemarks,
				collectedPlacemarks,
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
					placemark.atmData.index = i;
					placemark.atmData.shown = true;
					placemark.atmData.clustered = true;

					placemarks.push(placemark);
				}

				filterPlacemarks();
				// clusterer.add(placemarks);
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

				sortPlacemarks();
			}


			function sortPlacemarks() {
				var i, l = filteredPlacemarks.length;

				clusteredPlacemarks = [];
				collectedPlacemarks = [];

				for (i=0; i<l; i++) {
					if (filteredPlacemarks[i].atmData.bank === 'Альфа-Банк') {
						collectedPlacemarks.push(filteredPlacemarks[i]);
					} else {
						clusteredPlacemarks.push(filteredPlacemarks[i]);
					}
				}

				updatePlacemarks();
			}


			function updatePlacemarks() {
				clusterer.removeAll();
				collection.removeAll();

				clusterer.add(clusteredPlacemarks);

				// for (var i=0; i<collectedPlacemarks.length; i++) {
					collection.add(collectedPlacemarks);//[i]);
				// }

				// collection.each(function(elem) {
				// 	console.log(elem.state.visible);
				// }, collection);

				// var i, l = placemarks.length;

				// if (!banksToShow.length) {
				// 	clusterer.removeAll();
				// 	clusterer.add(placemarks);
				// 	for (i=0; i<l; i++) {
				// 		placemarks[i].atmData.shown = true;
				// 	}
				// 	return;
				// }
				// for (i=0; i<l; i++) {
				// 	if (~banksToShow.indexOf(placemarks[i].atmData.bank)) {
				// 		if (!placemarks[i].atmData.shown) {
				// 			clusterer.add(placemarks[i]);
				// 			placemarks[i].atmData.shown = true;
				// 		}
				// 	} else {
				// 		clusterer.remove(placemarks[i]);
				// 		placemarks[i].atmData.shown = false;
				// 	}
				// }
				// clusterer.refresh();
			}


			$http.get('data/atms.json').success(function(data) {
				atms = data;
			});

			$http.get('data/banks.json').success(function(banks) {
				$scope.banks = banks;
			});

			$(function() {
				ymaps.ready(function() {
					initPlacemarks();
				});
			});
		}])

		.directive('listed', function() {
			function link(scope, element, attrs) {
				var placemark = scope.atm;

				collection.add(placemark);

				// This chunk of code supposes that ymaps is ready
				element.on('click', function() {
					$('.b-atms__atm_active').removeClass('b-atms__atm_active');
					$(this).addClass('b-atms__atm_active');
					map.setCenter(placemark.geometry.getCoordinates(), 14, {
						duration: 150
					});
				});
				// Make placemark label to correspond with label's index
				scope.$watch(function() {
					return scope.$index + 1 == placemark.properties.get('iconContent');
				}, function() {
					placemark.properties.set({iconContent: scope.$index + 1});
				});

				// element.on('$destroy', function() {
				// 	clusterer.remove(placemark);
				// });
			}

			return {
				link: link
			};
		});




	function initMap() {
		// ymaps.load(['package.clusters']);

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

		// collection = new ymaps.GeoObjectCollection();
		collection = new ymaps.Clusterer({
			groupByCoordinates: true,
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
				href: 'img/placemark_green.svg',
				size: [27, 31],
				offset: [-13, -31]
			}],
			clusterIconContentLayout: emptyClusterContentLayout
		});

		map.geoObjects.add(clusterer);
		map.geoObjects.add(collection);
	}




	$(function() {
		var $map = $('.map-list__map'),
			$atms = $('.b-atms');

		$map.height($(window).height() - $map.offset().top);
		$atms.height($(window).height() - $atms.offset().top);

		ymaps.ready(initMap);
	});
})();
