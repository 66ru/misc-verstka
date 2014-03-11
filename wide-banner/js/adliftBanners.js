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
                var rnd = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
                var show_adlift = 'http://show.adlift.ru/'+ banner['adliftSlotUid'] +'.js';
                var current_url = window.location;
                var source = source !== undefined ? source : '';
                var bannersource = bannersource !== undefined ? bannersource : '';
                if (source == '') { var current_code = bannersource; } else { var current_code = source; }
                document.write ("<scr"+"ipt type='text/javascript' src='"+show_adlift);
                document.write ("?rnd="+rnd+"&amp;url="+current_url+"&amp;code="+current_code+"&amp;jsonp="+banner['onLoad']);
                document.write ("'></scr"+"ipt>");
                break;
            } else {
                banners[i]['status'] = 'disable';
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
                    banners[i]['status'] = 'success';
                    banners[i]['visible'] = true;
                    banners[i]['html'] = data['banner_html'];;
                    renderBanner(banners[i]);
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
                'priority' : 10
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
