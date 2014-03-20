/*
расстановка баннеров от adlift'а на страницу
для работы необходим jquery.docwrite.1.1.0.js
*/
var adliftQueue = function(opts) {
    var defaults = {
        'banners' : []
    };

    var o = $.extend({}, defaults, opts);
    var banners = o.banners;
    //var initalized = false;
    //var maxInitalizationPeriods = 1000;
    //svar initalizationPeriods = 0;
    var debug = true;
    var defaultBanner = {
        'identifier' : 'banner', // внутренний уникальный идентификатор баннера
        'hideOn' : false, // список идентификаторов баннеров. Если они рписутствуют на странице, текущий баннер вставлять не надо
        'adliftSlotUid' : false, // uid слота баннера в adlift
        'onLoad' : 'adliftParseResponse', // имя ф-ции, которую надо вызывать при получении ответа от баннерки
        'targetId' : false, // id DOM-элемента страницы, где должен располагаться баннер
        'status' : 'new', // статус (для внутренних нужд)
        'priority' : 30, // приоритет запросов баннеров. Чем ниже число, тем выше приоритет
        'behaviors' : false, // поведения баннера
        'visible' : false // признак показывать/не показывать (для внутренних нужд)
    };

    // вставить содержимое баннера на страницу
    var renderBanner = function(data) {
        var targetObj = $('#'+data['targetId']);
        targetObj.html('');
        $(document).bind('beforedocwrite', function(event, data) {
            data.target = targetObj;
        });
        aliftDivId = data['targetId'];
        document.write(data.html);
        aliftDivId = false;
        $(document).unbind('beforedocwrite');
        return true;
    }

    var sortBanners = function (a, b) {
        if (a['priority'] < b['priority']) {
            return -1;
        }
        if (a['priority'] > b['priority']) {
            return 1;
        }
        return 0;
    }

    var isLoadEnable = function (banner) {
        if (banner['hideOn'] && banner['hideOn'].length) {
            for(y in banner['hideOn']) {
                for (x in banners) {
                    if (banners[x]['identifier'] == banner['hideOn'][y] && banners[x]['visible']) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    // вставляем код баннеров и ждем получение их содержимого
    this.init = function () {
        for(i in banners) {
            banners[i] = $.extend({}, defaultBanner, banners[i]);
        }
        banners.sort(sortBanners);
        loadNextBanner();
        //checkInitialization();
    };

    var loadNextBanner = function () {
        var banner = false;
        var bannerObj = false;
        for(i in banners) {
            banner = banners[i];
            bannerObj = $('#'+banner['targetId']);
            if (banner['status'] != 'new') {
                continue;
            }
            var loadEnable = isLoadEnable(banner);
            if (loadEnable && bannerObj.length && banner['adliftSlotUid']) {
                if (debug) {
                    console.log('lodad: '+banners[i]['identifier']);
                }
                banners[i]['status'] = 'wait';
                insertBanner (banner);
                break;
            } else {
                banners[i]['status'] = 'disable';
            }
        }
    }

    var insertBanner = function (banner) {
        var rnd = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
        var show_adlift = 'http://show.adlift.ru/'+ banner['adliftSlotUid'] +'.js';
        var current_url = window.location;
        var source = source !== undefined ? source : '';
        var bannersource = bannersource !== undefined ? bannersource : '';
        if (source == '') { var current_code = bannersource; } else { var current_code = source; }
        document.write ("<scr"+"ipt type='text/javascript' src='"+show_adlift);
        document.write ("?rnd="+rnd+"&amp;url="+current_url+"&amp;code="+current_code+"&amp;jsonp="+banner['onLoad']);
        document.write ("'></scr"+"ipt>");
    }

    var appendBannerBehaviors = function (banner) {
        if (banner['behaviors'] && banner['behaviors']) {
            for (i in banner['behaviors']) {
                behaviors[i](banner['behaviors'][i], banner);
            }
        }
    }

    // проверяем, загрузилось ли содержимое всех баннеров
    /*
    var checkInitialization = function () {
        initalizationPeriods++;
        if(!initalized) {
            var tmp = true;
            for (i in banners) {
                if (banners[i]['status'] && (banners[i]['status'] == 'wait' || banners[i]['status'] == 'new')) {
                    tmp = false;
                }
            }
            initalized = tmp;
            if (!initalized && initalizationPeriods < maxInitalizationPeriods ) {
                setTimeout(checkInitialization, 10);
                if (debug) {
                    console.log('check');
                }
            }
            else {
                initalized = true;
                if (debug) {
                    console.log('initalized');
                }
            }
        }
    }
    */

    // обрабатываем ответ от баннерки
    this.parseResponse = function(data, source) {
        data = JSON.parse(data);
        if (!data || !data['slot_id'])
            return;
        for (i in banners) {
            if (banners[i]['adliftSlotUid'] == data['slot_id']) {
                if (data['banner_available']) {
                    var appendBehaviors = false;
                    if (banners[i]['status'] == 'wait') {
                        appendBehaviors = true;
                    }
                    banners[i]['status'] = 'success';
                    banners[i]['visible'] = true;
                    banners[i]['html'] = data['banner_html'];;
                    if (renderBanner(banners[i])) {
                        if (appendBehaviors) {
                            appendBannerBehaviors(banners[i]);
                        }
                    }
                }
                else {
                    banners[i]['status'] = 'success';
                    banners[i]['visible'] = false;
                    banners[i]['html'] = '';
                }
                loadNextBanner();
            }
        }
    }

    reloadBanner = function(identifier) {
        for (i in banners) {
            if (banners[i]['identifier'] == identifier) {
                insertBanner(banners[i]);
            }
        }
    }

    var behaviors = {
        fixed : function(opts, banner) {
            var defaults = {
                content: '', // селектор контейнеров, которые будут залипать
                parent: '',
                after: '', // селект контейнера, после окончания контента в котором необходимо залипание
                sticky: 'sticky__content_sticky',
                bottom: 'sticky__content_bottom'
            };
            var ops = $.extend({}, defaults, opts);
            var $window = $(window);

            $(ops.content).each(function() {
                var $sticky = $(this)
                if (!$sticky.length) {
                    return;
                }
                var $parent = $sticky.parents(ops.parent),
                $after = $(ops.after),
                sticky = {}, parent = {}, state;

                if (!$after.length) $after = null;
                console.log($after);

                updateParams();
                reformPosition($window.scrollTop());

                $window.on('scroll', function() {
                    reformPosition($window.scrollTop());
                });

                function updateParams() {
                    parent.top = $parent.offset().top;
                    parent.height = $parent.outerHeight();
                    parent.bottom = parent.top + parent.height;

                    if ($after) {
                        sticky.top = $after.offset().top + $after.outerHeight();
                    } else {
                        sticky.top = $sticky.offset().top;
                    }
                    sticky.left = $sticky.offset().left;
                    sticky.width = $sticky.outerWidth();
                    sticky.height = $sticky.outerHeight();
                    sticky.posLeft = sticky.left - $parent.offset().left;
                }

                function reformPosition(windowScrollTop) {
                    if ( (sticky.top < windowScrollTop) /*&& isStickable()*/ ) {
                        if (windowScrollTop + sticky.height < parent.bottom) {
                            if (state !== 'sticky') { makeSticky(); }
                        } else if (state !== 'bottom') { makeBot(); }
                    } else if (state !== 'relative') { makeRel(); }
                }

                function makeRel() {
                    state = 'relative';
                    $sticky.removeClass(ops.sticky)
                        .removeClass(ops.bottom)
                            .css({
                                left: 0,
                                width: null
                            });
                }

                function makeSticky() {
                    state = 'sticky';
                    $sticky.removeClass(ops.bottom)
                        .addClass(ops.sticky)
                            .css({
                                left: sticky.left,
                                width: sticky.width
                            });
                }

                function makeBot() {
                    state = 'bottom';
                    console.log('bottom');
                }
            });

        },

        refreshable : function(opts, banner) {
            var defaults = {
                effect: '',
                verticalInterval: false, // интервал в px, при скролле которого баннер будет перегружен
                minTimeInterval: false, // минимальное время показа баннера в секундах 
                timeInterval: false, // интервал в секундах после которого будет перегружен баннер
                verticalOffset: 0 // отступ сверху после которого надо отсчитывать verticalInterval
            };
            var ops = $.extend({}, defaults, opts);

            var obj = $('#'+banner['targetId']);
            var isAviable = true;
            var isNeedRefresh = !ops.verticalInterval;
            var actionOnDelay = false;
            if (!obj.length) {
                return;
            }
            var setAviability = function () {
                if (!ops.minTimeInterval) {
                    isAviable = true;
                    return;
                }
                isAviable = false;
                setTimeout(function(){
                    isAviable = true;
                    if (actionOnDelay) {
                        onIntervalAction(currentIndex);
                    }
                }, ops.minTimeInterval*1000);
            }
            var setIntervalAction = function () {
                if (!ops.timeInterval) {
                    return;
                }
                setTimeout(function(){
                    onIntervalAction(currentIndex);
                }, ops.timeInterval*1000);
            }
            var onIntervalAction = function(index) {
                if (!isAviable) {
                    actionOnDelay = true;
                    return;
                }
                reloadBanner(banner['identifier']);
                isNeedRefresh = !ops.verticalInterval;
                actionOnDelay = false;
                setAviability();
                setIntervalAction();
                /*
                var img = $("<img>");
                var images = [
                    "http://25.media.tumblr.com/tumblr_mako6i0I5R1qzi6z7o1_500.jpg",
                    "http://25.media.tumblr.com/tumblr_mblz41ecRY1qzi6z7o1_500.jpg",
                    "http://31.media.tumblr.com/tumblr_mcx9v0ljkH1qzi6z7o1_500.jpg"
                ];
                if (images[index]) {
                    var html = '<img src="'+ images[index] +'" alt="" width="100%" height="400" style="cursor: pointer;" />';
                    obj.html(html);
                    obj.hide();
                    obj.fadeIn(500);
                }
                */
            };
            var currentIndex = false;
            onIntervalAction(currentIndex);

            var $window = $(window);
            $window.on('scroll', function() {
                var windowTop = $window.scrollTop();
                if (currentIndex == false) {
                    currentIndex = 0;
                }
                var currentIntervalForScroll = (currentIndex+1) * ops.verticalInterval;
                var prevIntervalForScroll = (currentIndex) * ops.verticalInterval;
                if (currentIntervalForScroll < windowTop) {
                    currentIndex++;
                    isNeedRefresh = true;
                    onIntervalAction(currentIndex);
                }
                else if (prevIntervalForScroll > windowTop) {
                    currentIndex--;
                    isNeedRefresh = true;
                    onIntervalAction(currentIndex);
                }
            });
       }
    }

};

var aliftDivId = false;
var adliftBannersQueue = new adliftQueue({
        'banners' : [
            {
                'identifier' : 'topBigBanner',
                'hideOn' : false,
                'adliftSlotUid' : '5317101d652a0418bcb2faef',
                'targetId' : 'topBigAdb'
            },
            {
                'identifier' : 'topBanner',
                'hideOn' : ['topBigBanner'],
                'adliftSlotUid' : '4fbe2a8b714cbf1cd500001f',
                'targetId' : 'topAdb',
            },
            {
                'identifier' : 'wideBanner',
                'hideOn' : ['topBigBanner'],
                'adliftSlotUid' : '52a175f549ac1732af5c6918',
                'targetId' : 'wideAdb',
                'priority' : 10,
                'behaviors' : {
                    'fixed' : {
                        'content' : '.sticky__content',
                        'parent' : '.sticky__parent',
                        'after': '.sticky__after'
                    }
                }
            },
            {
                'identifier' : 'skyscraper',
                'hideOn' : ['topBigBanner', 'wideBanner'],
                'adliftSlotUid' : '4fbb7c5b714cbf0ced000001',
                'targetId' : 'rightAdb'
            }
        ]
    });

$(document).load(function(){
    adliftBannersQueue.init();
});

var adliftParseResponse = function(data) {
    adliftBannersQueue.parseResponse(data);
}









