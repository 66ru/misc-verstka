$(document).ready(function() {

	var map, fullScreen = false;
	ymaps.ready(init);

	//верстка вставляемой строки таблицы
	var templateMap = '<tr class="b-bank-exchange-table__row b-bank-exchange-table__row_map"><td class="b-bank-exchange-table__cell" colspan="6"><div id="map" class="b-bank-exchange-table__map"></div></td></tr>';

	//убрать карты при сортировке
	$(".b-bank-exchange-table__wrap thead tr th").on("click", function() {
		$(".b-bank-exchange-table__row_map").remove();
		$(".b-bank-exchange-table__wrap").find(".opened").removeClass("opened");
	});

	/*открытие карты*/
	$(".b-bank-exchange-table__wrap td").on("click", function() {
		if ($(this).parent().hasClass("opened")) {
			$(this).parent().next().remove();
			$(this).parent().removeClass("opened");
		} else {
			$(this).parent().addClass("opened");
			$(this).parent().after(templateMap);
		}
		return false;
	});

	/*инициализация сортировки*/
	$(".b-bank-exchange-table__wrap").tablesorter({
		sortList: [[0,0]],
		headers: {
			// работаем с колонкой даты (подсчет идет с нуля)
			5: {
				// запрет сортировки указанием свойства
				sorter: false
			},
		},

	});

function init () {
    var map = new ymaps.Map('map', {
            center: [55.650625, 37.62708],
            zoom: 10
        }),
        counter = 0,
        // Создание макета содержимого балуна.
        // Макет создается с помощью фабрики макетов с помощью текстового шаблона.
        BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="b-yacard-popup-exchange">' +
                '<b class="b-yacard-popup-exchange__label">$[properties.label]</b><br />' +
            	'<a class="b-yacard-popup-exchange__title" href="$[properties.link]">$[properties.name]</a><br />' +
				'<div class="b-valute-converter b-yacard-popup-exchange-converter"><table class="b-valute-converter__table">' +
				'<tr class="b-valute-converter__row">' +
					'<td class="b-valute-converter__cell">' +
					'<input id="" maxlength="20" size="7" class="b-valute-converter__input js-format-thousands" value="10000" />' +
					'</td><td class="b-valute-converter__gap">'+
					'<div class="b-more b-valute-converter-more">' +
					'<a class="b-more__visible" href="#">USD</a>' +
					'<ul class="b-more__popup">' +
					'<li class="b-more__elem"><a class="b-link" href="#">евро</a></li><li class="b-more__elem"><a class="b-link" href="#">руб.</a></li>' +
					'</ul></div></td><td class="b-valute-converter__cell b-valute-converter__cell_eqv">' +
					'<a title="Поменять местами" href="#" class="b-valute-converter__switch">=</a>' +
					'</td><td class="b-valute-converter__cell">' +
					'<input id="rInput" maxlength="20" size="7" class="b-valute-converter__input b-valute-converter__input_hidden">' +
            		'<span class="b-valute-converter__result">1 064,79</span>' +
					'</td><td class="b-valute-converter__gap">' +
					'<div class="b-more b-valute-converter-more">' +
					'<a class="b-more__visible b-more__visible_without_arr" href="#">руб.</a>' +
					'<ul class="b-more__popup">' +
					'<li class="b-more__elem"><a class="b-link" href="#">USD</a></li><li class="b-more__elem"><a class="b-link" href="#">евро</a></li>' +
					'</ul></div></td><td colspan="5">&nbsp;</td></tr></table></div>' +
            	'<div class="b-yacard-popup-exchange__text"><p>$[properties.adress]<br />$[properties.phones]</p><p>$[properties.worktime]</p></div>' +
            '</div>', {

            // Переопределяем функцию build, чтобы при создании макета начинать
            // слушать событие click на кнопке-счетчике.
            build: function () {
                // Сначала вызываем метод build родительского класса.
                BalloonContentLayout.superclass.build.call(this);
                // А затем выполняем дополнительные действия.
                $('#counter-button').bind('click', this.onCounterClick);
                $('#count').html(counter);
            },

            // Аналогично переопределяем функцию clear, чтобы снять
            // прослушивание клика при удалении макета с карты.
            clear: function () {
                // Выполняем действия в обратном порядке - сначала снимаем слушателя,
                // а потом вызываем метод clear родительского класса.
                $('#counter-button').unbind('click', this.onCounterClick);
                BalloonContentLayout.superclass.clear.call(this);
            },

            onCounterClick: function () {
                $('#count').html(++counter);
                if (counter == 5) {
                    alert('Вы славно потрудились.');
                    counter = 0;
                    $('#count').html(counter);
                }
            }
        });
	 map.controls
        // Кнопка изменения масштаба.
        .add('zoomControl', { left: 5, top: 5 })
        // Список типов карты
        .add('typeSelector')
        // Стандартный набор кнопок
        .add('mapTools', { left: 35, top: 5 });





	$(".b-bank-exchange-table__map").bind("click", function() {
		map.container.fitToViewport();
	});


    var placemark = new ymaps.Placemark([55.650625, 37.62708], {
            label: 'Обменный пункт',
        	name: '«Банк Восточный Экспресс»',
        	link: 'http://www.bank.ru/',
        	adress: 'Екб, ул. Белинского, 61',
			phones: '(343) 228-30-87, 228-30-81, 228-30-88, 228-30-85',
        	worktime: 'Время работы: пн-пт: 09:00-20:00, сб:10:00-17:00',

        }, {
            balloonContentLayout: BalloonContentLayout
        });
	$(window).resize(function() {
		map.container.fitToViewport();
		$("#map").width()
	});
    map.geoObjects.add(placemark);
}












});

