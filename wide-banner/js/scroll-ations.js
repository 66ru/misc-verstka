(function($) {
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i) ? true : false;
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i) ? true : false;
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
	}
};

if (!isMobile.any()) {
	var $window = $(window);

	$window.on('load', function () {

		var obj = $(".sticky__content");
		var onIntervalAction = function(index) {
			var img = $("<img>");
			var images = [
				"http://25.media.tumblr.com/tumblr_mako6i0I5R1qzi6z7o1_500.jpg",
				"http://25.media.tumblr.com/tumblr_mblz41ecRY1qzi6z7o1_500.jpg",
				"http://31.media.tumblr.com/tumblr_mcx9v0ljkH1qzi6z7o1_500.jpg"
			];
			if (images[index]) {
				var html = '<img src="'+ images[index] +'" alt="" width="100%" height="400" style="cursor: pointer;" />';
				obj.html(html);
			}

		};

		var options = {
			'type' : 'interval',
			'interval' : '600',
			'onScroll' : onIntervalAction,
		};
		var currentIndex = false;

			$window.on('scroll', function() {
				var windowTop = $window.scrollTop();
				if (options.type == 'interval') {
					if (currentIndex == false) {
						currentIndex = 0;
					}
					var currentIntervalForScroll = (currentIndex+1) * options.interval;
					var prevIntervalForScroll = (currentIndex) * options.interval;
					if (currentIntervalForScroll < windowTop) {
						options.onScroll(currentIndex);
						currentIndex++;
					}
					else if (prevIntervalForScroll > windowTop) {
						currentIndex--;
						options.onScroll(currentIndex);
					}
				}
			});


	});
}
})(jQuery);






<style type="text/css">
#shareWrap {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 60px;
background: #fff;
z-index: 10000;
display: none;
-webkit-box-shadow: 0px 2px 12px 0px rgba(50, 50, 50, 0.75);
-moz-box-shadow:    0px 2px 12px 0px rgba(50, 50, 50, 0.75);
box-shadow:         0px 2px 12px 0px rgba(50, 50, 50, 0.75);
background-color: rgb(233, 239, 219);
}

.shareWrap__el {
margin: 0 auto;
max-width: 1280px;
padding: 0 1%;
position: relative;
padding: 6px 0 0 0;
}

.shareWrap__el__photo {
top: 0;
right: 0;
position: absolute;
}


.shareWrap__el__text {
line-height: 24px;
padding-right: 180px;
font-size: 1.2em;
float: right;
}

.shareWrap__el__podpis {
font-size: .8em;
font-style: italic;
}


#ya_share {
float: left;
padding-top: 10px;
}

</style>

<script type="text/javascript" src="//yandex.st/share/share.js" charset="utf-8"></script>

<script type="text/javascript">
$(document).ready(function() {

var editors = {
'16' : {
    'name' : 'Артем Очеретин',
    'post' : 'журналист, раздел Недвижимость',
    'text' : 'Нравится мой материал? Мне тоже! Давай поделимся им с друзьями',
    'photo' : 'http://maggie.unistorageserve.ru/530ec4b3f7c0796bbc546369'
},
'23' : {
    'name' : 'Дмитрий Шлыков',
    'post' : 'заместитель главного редактора',
    'text' : 'Если мне нравится статья, я жму на Like двумя большими пальцами. А ты какими?',
    'photo' : 'http://maggie.unistorageserve.ru/530ec4f6e8d7b60d4b29e33a'
},
'6' : {
    'name' : 'Ирина Кузнецова',
    'post' : 'журналист, раздел Общество',
    'text' : 'Я знаю, что тебе понравился мой материал. Нажми на кнопку, чтобы я перестала на тебя ТАК смотреть',
    'photo' : 'http://maggie.unistorageserve.ru/530ec4bff7c0796bbd5468dd'
},
'22' : {
    'name' : 'Мария Демидова',
    'post' : 'редактор спецпроектов',
    'text' : 'Нажми на кнопку &mdash; спаси Машеньку от медведя',
    'photo' : 'http://lisa.unistorageserve.ru/530ec4cce8d7b60d4429a362'
},
'29' : {
    'name' : 'Валерий Кунщиков',
    'post' : 'журналист Службы Новостей',
    'text' : 'Если ты не поделишься этой ссылкой, мир пойдет прахом: его завоюют инопланетяне и съедят всех живьем',
    'photo' : 'http://maggie.unistorageserve.ru/530ec4fef7c0796bc154aecc'
},
'31' : {
    'name' : 'Мария Лейва',
    'post' : 'журналист Службы новостей',
    'text' : 'Жми сюда, помоги мне заработать на новые туфли!',
    'photo' : 'http://maggie.unistorageserve.ru/530ec4c5e8d7b60d4a29cabc'
},
'2' : {
    'name' : 'Сергей Панин',
    'post' : 'журналист, раздел Бизнес',
    'text' : 'Дружище, каждый твой лайк - это рубль к моей премии и стопицот к твоей карме',
    'photo' : 'http://bart.unistorageserve.ru/530ec4e4f7c0796bc0549052'
},
'7' : {
    'name' : 'Наталия Попова',
    'post' : 'выпускающий редактор Службы Новостей',
    'text' : 'Если женщина просит, надо взять и сделать. И всего-то - кнопку нажать',
    'photo' : 'http://maggie.unistorageserve.ru/530da15ae8d7b60d4a29b36d'
},
'21' : {
    'name' : 'Мария Захарова',
    'post' : 'журналист Службы Новостей',
    'text' : 'Ну классная же новость?! Почитал сам, дал почитать другому',
    'photo' : 'http://bart.unistorageserve.ru/530ec4d4e8d7b60d4b29e336'
},
'default' : {
    'name' : 'Богдан Кульчицкий',
    'post' : 'главный редактор',
    'text' : 'Мы работаем не за деньги, а за славу. Нажми на кнопку, дай нам ее',
    'photo' : 'http://lisa.unistorageserve.ru/530f0505e8d7b60d4329a25c'
}
};

var editor = false;
if (socialzationBlockParams['options'] && socialzationBlockParams['options'] ) {
    var editorId = socialzationBlockParams['options']['editorId'];
    editor = editors[editorId] ? editors[editorId] : editors['default'];
}

if (editor) {
	var shareWrapDivId = "shareWrap";
	var shareDivId = "ya_share";
	var socialBlockInitalized = false;

	var div = $("<div>");
	div.attr("id", shareWrapDivId);

	var div2 = $("<div>");
	div2.attr("class", "shareWrap__el");
	div2.html('<div class="shareWrap__el__photo"><img src="'+editor['photo']+'" height="120"></div>');

	var span = $("<div>");
	span.attr("class", "shareWrap__el__text");

	span.html(editor['text'] + '<br><span class="shareWrap__el__podpis">'+editor['name']+', '+editor['post']+'</span>');

	var span2 = $("<div>");
	span2.attr("id", shareDivId);

	$(div2).append(span);
	$(div2).append(span2);
	$(div).append(div2);
	$("body").append(div);

	var shareDiv = $("body").find("#"+shareDivId);

	var initalizeSocialBlock = function() {
	new Ya.share({
	        element: shareDivId,
	            theme: 'counter',
	            elementStyle: {
	                'type': 'none',
	                'border': false,
	                'quickServices': ['yaru', 'twitter', 'facebook', 'vkontakte']
	            },
	            link: socialzationBlockParams['link'],
	            title: socialzationBlockParams['linkText'],
	            description: socialzationBlockParams['annotation'],
	            image: socialzationBlockParams['imageUrl'],
	            serviceSpecific: {
	                twitter: {
	                    title: socialzationBlockParams['linkText'] + ' ' + socialzationBlockParams['link']
	               }
	        }
	});
	}

	    var init = false;
	    var fixBox = jQuery("#"+shareWrapDivId);
	    var topOffset = 500;
	    var topOffset = 500;
	    var offsetEl = $("#comments");
	    if (offsetEl.length) {
	        topOffset = offsetEl.offset().top - 800 > 500 ? offsetEl.offset().top - 800 : 500;
	    }

	    jQuery(window).scroll(function () {
	        var showing = false;
	        var hiding = false;
	        if (jQuery(window).scrollTop() > topOffset - 200 && !socialBlockInitalized) {
	            initalizeSocialBlock();
	        }

	        if (jQuery(window).scrollTop() > topOffset) {
	            if (!init) {
	                if (hiding) {
	                    fixBox.stop();
	                    hiding = false;
	                }

	                showing = true;
					$('#runBanner').css({'top' : '140px'});
					$('.sticked').css({'top' : '80px'});
	                fixBox.css({"top": "-100px"});
	                fixBox.toggle();
	                fixBox.animate({"top": "0px"}, 300, function () {
	                    showing = false;
	                });
	                init = true;
	            }
	        } else {
				if (init) {
		            if (showing) {
		                fixBox.stop();
		                showing = false;
		            }

					$('#runBanner').css({'top' : '20px'});
					$('.sticked').css({'top' : '20px'});
		            hiding = true;
		            fixBox.animate({"top": "-100px"}, 300, function () {
		                fixBox.toggle();
		                fixBox.css({"top": "0px"});
		                hiding = false;
		            });
		            init = false;
		        }
	        }
	    });
}


});

</script>
