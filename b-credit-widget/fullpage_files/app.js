/**
 * Created with JetBrains PhpStorm.
 * User: bazilio
 * Date: 03.04.12
 * Time: 21:21
 */
app = {
	initialURL:location.href,
	initialFire: false,
	popped:false,
	modules:[],
	_listeners:{},
	historySupport:false,
	initUi:function () {
		/*
		 глобальные элементы интерфейса
		 */
		for (module in this.modules) {
			this.modules[module].initUi();
		}
	},
	init:function () {
		var self = this;
		self.historySupport = !!(window.history && history.pushState);
		self.initialFire = document.location.href;
		app.url.init();

		/*
		 глобальные обработчики событий
		 */
		for (module in self.modules) {
			self.modules[module].init();
		}
		self.initUi();
	},
	addListener:function (type, listener) {
		if (typeof this._listeners[type] == "undefined") {
			this._listeners[type] = [];
		}

		this._listeners[type].push(listener);
	},

	fire:function (event) {
		app.initialFire = false;
		var event = event;
		if (typeof event == "string") {
			event = { type:event };
		}
		if (!event.target) {
			event.target = this;
		}

		if (!event.type) {  //falsy
			throw new Error("Event object missing 'type' property.");
		}

		if (this._listeners[event.type] instanceof Array) {
			var listeners = this._listeners[event.type];
			for (var i = 0, len = listeners.length; i < len; i++) {
				listeners[i].call(this, event);
			}
		}
	},

	/*
	 глобальные модули и методы
	 popup:{
	 show:function () {
	 },
	 hide:function () {
	 }
	 },
	 */

	renderTemplate:function (templateFunction, targetEl, data) {
		var templateData = data['data'];
		var renderList = data['list'];
		var insertType = data['insertType'] ? data['insertType'] : 'replace';
		var html = '';
		targetEl = $(targetEl);

		var context = data['context'] ? data['context'] : false;
		if (context) {
			var html = '';
			if (templateData) {
				for (i in context) {
					if (templateData[context[i]]) {
						templateData = templateData[context[i]];
					}
					else {
						templateData = false;
						break;
					}
				}
			}
		}

		if (templateData) {
			if (renderList) {
				var x = false;
				for (i in templateData) {
					html += templateFunction(templateData[i]);
					x++;
				}
			}
			else {
				html = templateFunction(templateData);
			}
		}

		if (insertType == 'replace') {
            targetEl.wrap("<div>");
            var wrapper = targetEl.parent();
            wrapper.html(html);
            targetEl = wrapper.children().filter(":first");
            targetEl.unwrap();
			this.fire({'type':'contentReplaced', 'target':targetEl});
		}
		else if (insertType == 'append') {
			targetEl.append(html);
			this.fire({'type':'contentReplaced', 'target':targetEl});
		}
		return targetEl;
	},

	string:{
		plural:function (n, c1, c2, c3) {
			c3 = c3 || c2;
			return n % 10 == 1 && n % 100 !=11 ? c1 : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? c2 : c3);
		}
	},

    date:{
        /**
         * dateString is a 'dd-mm-YYYY'
         */
        dateToTimestamp:function (dateString, hourOffset) {
            hourOffset = hourOffset || 0;
            var d = dateString.match(/\d+/g);
            var ts = +new Date(d[2], d[1]-1, d[0], hourOffset);		// some days started at 4 o'clock
            return ts/1000;
        },

        timestampToDate:function (unixtime) {
            // Формируем дату вида "01-02-2000"
            var d = new Date(unixtime*1000);
            var day = d.getDate()+"";
            if( day.length == 1 )
                day = "0"+day;
            var month = (d.getMonth()+1)+"";
            if( month.length == 1 )
                month = "0"+month;
            return day+"-"+month+"-"+d.getFullYear();
        }
    },

    effect:{
        ajaxReloadingStart:function (obj, type) {
            this.ajaxReloading(obj, 'start');
        },
        ajaxReloadingEnd:function (obj, type) {
            this.ajaxReloading(obj, 'end');
        },
        ajaxReloading:function (obj, type, ops) {
            ops = ops ? ops : {};

            var defaults = {
                'callback' : false,
                'speed' : 500
            };
            ops = $.extend({}, defaults, ops);

            if (type == 'start') {
                var div = $("<div>");
                var loading = $("<div>");
                loading.addClass("ajax_loader");
                loading.html();

                var backgroundTop = "50%";

                // если элемент очень большой и находится в видимой части экрана, надо поставить иконку загрузки на видимую часть
                var screenOffset = jQuery(window).scrollTop();
                var objHeight = obj.height();
                var objOffset = obj.offset().top;
                var screenHeight = $(window).height();

                if ( (objHeight+objOffset) < (screenOffset + screenHeight) && (objHeight+objOffset) > screenOffset && (objHeight/2+objOffset) < screenOffset ) {
                  var tmp = screenOffset - objOffset;
                  backgroundTop = tmp + (objHeight - tmp) / 2 + 'px';
                }
                else if ( (objOffset) < (screenOffset + screenHeight) && (objOffset) > screenOffset && (objOffset+objHeight/2) > (screenOffset + screenHeight) ) {
                  backgroundTop = (screenOffset + screenHeight - objOffset) / 2 + 'px';
                }
                else if ( (objOffset) < (screenOffset) && (objOffset + objHeight) > (screenOffset + screenHeight) ) {
                  var tmp = screenOffset - objOffset;
                  backgroundTop = tmp + (screenHeight) / 2 + 'px';
                }

                loading.css ({
                  'top' : backgroundTop
                });

                div.css ({
                  'position' : 'relative'
                });
                $(obj).wrap(div);
                var divDom = $(obj).parent();
                divDom.append(loading);
                    $(obj).animate({'opacity' : 0.2}, ops.speed, function(){
                        if (ops['callback'])
                            ops['callback'](obj);
                    });
            }
            else if (type == 'end') {
                var divDom = $(obj).parent();
                divDom.find(".ajax_loader").remove();
                $(obj).animate({'opacity' : 1.0}, ops.speed, function(){
                    if (ops['callback'])
                        ops['callback'](obj);
                });
                $(obj).unwrap();
            }
        },
        slideIn : function (obj, parObj, ops) {
            ops = ops ? ops : {};
            var defaults = {
                'callback' : false,
                'create' : false,
                'direction' : 'left',
                'speed' : 400
            };
            ops = $.extend({}, defaults, ops);

            var parAttrs = {
                'position' : '',
//                'width' : '',
//                'height' : '',
                'overflow' : ''
            };
            for (i in parAttrs) {
                parObj.attr("old"+i, parObj.css(i));
            }

            var parWidth = parObj.width();
            parObj.css({
                'position' : 'relative',
                'overflow' : 'hidden'
            });

            var div = $("<div>");
            if (ops.direction == 'right') {
                var leftCss = parWidth+"px";
            }
            else {
                var leftCss = "-"+parWidth+"px";
            }
            div.css({
                'width' : parWidth+'px',
                'left' : leftCss,
                'position' : 'absolute',
                'background-color' : '#ffffff',
                'box-shadow' : '10px -1px 20px rgba(0, 0, 0, 0.16)',
                'top' : '0'
            });
            var divId = "tmp" + Math.floor(Math.random()*1000000);
            div.attr("id", divId);
            if (ops['create']) {
                div.append(obj);
                parObj.append(div);
            }
            else {
                obj.wrap(div);
            }

            var newObj = parObj.find("#"+divId);

            newObj.animate({'left': '0px'}, ops.speed, function(){
                var oldAttr = false;
                for (i in parAttrs) {
                    oldAttr = parObj.attr("old"+i);
                    parObj.css(i, oldAttr);
                }
                newObj.children().filter(":first").unwrap();
                if (ops['callback'])
                    ops['callback'](newObj);
            });


        }

    },

	ajax:{
		send:function (url, options, enableHistory) {
			var _success = function (data) {
				if (enableHistory !== false) {
					app.ajax.setHistory(data, '', url);
				}
			};

			var _error = function () {
				alert('Что-то пошло не так');
			};

			var _beforeSend = function () {
			};

            var sendObj = {
				url:url,
				beforeSend:options['beforeSend'] ? options['beforeSend'] : _beforeSend,
				dataType:'json',
				success:options['success'] ? options['success'] : _success,
				error:options['error'] ? options['error'] : _error
			};
            if (options['data']) {
                sendObj['data'] = options['data'];
            }

			$.ajax(sendObj);
		},
		hide:function () {
		},
		ajaxPage:function (url, enableHistory) {
            app.fire({'type':'beforePageReloaded'});
            app.ajax.send(url, {
				'success':function (data) {
					if (enableHistory != false)
						app.ajax.setHistory(data, '', url);
					app.fire({'type':'pageReloaded', 'result':data});
				}
			});
		},
		setHistory:function (data, title, url) {
			if (app.historySupport && url.length > 0) {
				if (title.length == 0)
					title = $(data).find('title').first().text();
                if (data["pageTitle"]) {
                    document.title = data["pageTitle"];
                }
				history.pushState({'data':data}, title, url);
			}
		}
	},

	url:{
		init:function () {
			if ($.url === undefined) {
				// TODO: include automatically
				console.error("You didn't include <jquery.url.js> plugin");
				return;
			}
			if (app.historySupport) {
				// Add event listener on "back" and "forward" buttons on browser if support
				window.onpopstate = function () {
					// Webkit old "bug" http://www.splefty.com/js/popstate.html
					if ( app.initialFire === document.location.href ) {
						return app.initialFire = false;
					}
					app.initialFire = false;
					app.fire({'type':'urlChanged', 'url':$.url()});
				}
			}
		},

		/**
		 * Change part of url by regular expression
		 * matchReg, startReg and endReg are must not contain a substrings
		 */
		changePart:function (value, startReg, matchReg, endReg) {
			var defaultPattern = /.*?/;
			var matchesAmount = 2;
			if (!matchReg) {
				matchReg = defaultPattern;
				matchesAmount = 1;
			}
			if (!endReg) {
				endReg = /.*/;		// find to the end
			}

			// At first find matchReg, at second match with default pattern
			for (var i=0; i<matchesAmount; i++)
			{
				var regexp = new RegExp( "^(" + startReg.source + ")(" + matchReg.source + ")(" + endReg.source + ")$" );
				var src = $.url().attr('source');
				var res = src.match(regexp);
				if (res) {
					if (res[2] !== undefined) {
						// found value in url
						// remove slashes, replace value and concatenate strings again
						src = res[1].replace(/(.*?)\/*$/, "$1") + "/" + value + "/" + res[3].replace(/^\/*(.*?)/, "$1");
					}
					else {
						// not found value in url
						// remove slashes and add value to the end string
						src = src.replace(/(.*?)\/*$/, "$1") + "/" +value + "/";
					}
					app.ajax.setHistory(null, '', src);
					return;
				}

				// not found value, try with default pattern
				matchReg = defaultPattern;
			}
		}
	},

	module:{
		register:function (name, classObj, options) {
			var tmp = {};
			tmp['tmp2'] = classObj;
			options = options ? options : {};
			app.modules[name] = new tmp['tmp2'](options);
		}
	}
};

$(document).ready(function () {
	app.init();
});