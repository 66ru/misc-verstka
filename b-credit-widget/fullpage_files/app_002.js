/**
 * Created with JetBrains PhpStorm.
 * User: bazilio
 * Date: 03.04.12
 * Time: 21:21
 */
app = {
	initialURL : location.href,
	popped : false,
	modules : [],
    _listeners : {},
	initUi:function () {
        /*
        глобаьные элементы интерфейса
         */
		for(module in this.modules) {
			this.modules[module].initUi();
		}
	},
	init:function () {
		var self = this;
        /*
        глобаьные обработчики событий
         */
		for(module in this.modules) {
			this.modules[module].init();
		}
		this.initUi();
        this.addListener('sortClick', this.redirect);
	},
    addListener: function(type, listener){
        if (typeof this._listeners[type] == "undefined"){
            this._listeners[type] = [];
        }

        this._listeners[type].push(listener);
    },

    fire: function(event){
        var event = event;
        if (typeof event == "string"){
            event = { type: event };
        }
        if (!event.target){
            event.target = this;
        }
        if (!event.type){  // false
            throw new Error("Event object missing 'type' property.");
        }

        if (this._listeners[event.type] instanceof Array){
            var listeners = this._listeners[event.type];
            for (var i=0, len=listeners.length; i < len; i++){
                listeners[i].call(this, event);
            }
        }
    },
    /*
    глобальные модули и методы
	string:{
		plural:function (num, suffixes) {
		}
	},
	popup:{
		show:function () {
		},
		hide:function () {
		}
	},
	*/
    redirect: function (event) {
        window.location = event.value;
    },

    renderTemplate: function (templateFunction, targetEl, data) {
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
                    if (templateData[context[i]]){
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
            var div = $("<div>");
            // todo: div.addClass(o.reconstructionClass);
            targetEl.wrap(div);
            var constructionObj = targetEl.parent();
            constructionObj.html(html);
            targetEl = constructionObj.children(":first");
            targetEl.unwrap();

            this.fire ({'type': 'contentReplaced', 'target' : targetEl});
        }
        else if (insertType == 'append') {
            targetEl.append(html);
            this.fire ({'type': 'contentReplaced', 'target' : targetEl});
        }
        return targetEl;
    },

	ajax:{
		send:function (url, options, enableHistory) {
            if (enableHistory !== false) {
                //return true;
            }

            var _success = function (data) {
                document.title = data.replace( /([\s\S]+)<title>/, '' ).replace(/<\/title>([\s\S]+)/, '' );
                if (enableHistory !== false) {
                    history.pushState({'data':data}, $(data).find('title').text(), url);
                }
            };

            var _error = function () {
                    alert('Что-то пошло не так');
                };

            var _beforeSend = function () {};

            $.ajax({
                url:url,
                beforeSend: options['beforeSend'] ? options['beforeSend'] : _beforeSend,
                dataType : 'json',
                success: options['success'] ? options['success'] : _success,
                error: options['error'] ? options['error'] : _error
            });
		},
		hide:function () {
		},
        ajaxPage: function (url) {
            app.ajax.send (url, {
                'success' : function (data){app.fire({'type' : 'pageReloaded', 'result' : data});}
            });
        }
	},
	module: {
		register:function(name, classObj, options) {
            var tmp = {};
            tmp['tmp2'] = classObj;
            options = options ? options : {};
			app.modules[name] = new tmp['tmp2'](options);
		}
	}
}

$(document).ready(function(){
	app.init();
});
