if ((typeof GporAuth == "undefined") || !GporAuth) {
	var GporAuth = {
		options:{
			providers_set:null,
			redirectUrl:  null,
			returnUrl:    null,
			service_host: '',
			ajax:         true,
			mobile:       null,
			callback:     null,
			hash:         null,
			width:        '600',
			height:       '400',
			url:          null,
			auth_url:     null,
			overlay:      false
		},
		mobile: null,
		loaded: false,

		/**
		 * Init function
		 * @param options
		 */
		init:               function (options) {
			options = options ? options : false;
			if (options) {
				for (i in options)
					this.options[i] = options[i];
			}

			this.mobile = this.isMobile();
			this.listenUI();

			this.options.auth_url = this.options.service_host + '/?width='
				                        + this.options.width + '&height=' + this.options.height +
			                        '&providers_set=' + encodeURIComponent(this.options.providers_set) +
			                        '&redirectUrl=' + encodeURIComponent(this.options.redirectUrl) +
			                        '&returnUrl=' + encodeURIComponent(this.options.returnUrl) +
			                        '&noClose=' + encodeURIComponent(this.options.noClose) +
			                        '&iframe=true' +
			                        '&ajax=' + (this.ajax ? 'true' : 'false') +
			                        (this.isMobile() ? '&mobile=true' : '');

		},
		/**
		 * Null function for not authorizated users
		 * @param callback
		 * @return {Boolean}
		 */
		run:                function (callback) {
			return false;
		},
		/**
		 * Appends UI event listeners
		 */
		listenUI:           function () {
			var self = this;
			var i, list = this.findClass('gpor_auth'), length = list.length;
			for (i = 0; i < length; i++) {
				if (list[i].href != undefined) {
					list[i].onclick = function (e) {
						var tgt=window.event? window.event.srcElement: e.target;
						self.show(tgt.parentNode.getAttribute('provideruse'));
						return false;
					};
				}
			}

			if (!this.isMobile()) {
				// прочие обработчики
				this.addEvent(window, 'resize', this.resize);
				this.addEvent(document, 'keydown', function (e) {
					e = e || window.event;
					if (e.keyCode == 27) {
						self.close();
					}
					return true;
				});
			}
		},
		/**
		 * Detects mobile browser
		 * @return {Boolean}
		 */
		isMobile:           function () {
			if (this.options.mobile === true) {
				return true;
			} else if (this.options.mobile == 'auto') {
				var nav = window.navigator.userAgent;
				var mobua = ['iPhone', 'Android', 'iPad', 'Opera Mobi', 'Kindle/3.0'];
				this.mobile = false;
				for (var i = 0; i < mobua.length; i++) {
					if (nav.indexOf(mobua[i]) >= 0)
						return true;
				}
			}
			return false;
		},
		show:               function (provider) {
			var self = this;
			if (this.fastLogin(provider)) return false;

			var providerUse = ''
			if (provider !== null && this.providers[provider] !== undefined) {
				providerUse += "&providerUse=" + provider;
			}


			if (!this.isMobile() && !this.loaded) {
				var cldDiv = document.createElement("div");
				cldDiv.id = 'gpor_auth_form';
				cldDiv.style.overflow = 'visible';
				cldDiv.style.backgroundColor = 'transparent';
				cldDiv.style.zIndex = '10000';
				cldDiv.style.position = 'fixed';
				cldDiv.style.display = 'block';
				cldDiv.style.top = '0px';
				cldDiv.style.left = '0px';
				cldDiv.style.textAlign = 'center';
				cldDiv.style.height = '878px';
				cldDiv.style.width = '1247px';
				cldDiv.style.paddingTop = '125px';
				if (this.options.overlay) cldDiv.style.backgroundImage = 'url(' + this.options.service_host + '/img/widget/overlay.png)';

				var cntDiv = document.createElement("div");
				cntDiv.style.position = 'relative';
				cntDiv.style.display = 'inline';
				cntDiv.style.overflow = 'visible';

				var img = document.createElement("img");
				img.onclick = this.close;
				img.className = 'popup-close-btn';


				img.style.position = 'relative';
				img.style.right = '-520px';
				img.style.top = '-490px';
				img.style.cursor = 'hand';
				img.style.width = '21px';
				img.style.height = '18px';
				img.style.border = '0';
				img.style.cursor = 'pointer';
				img.alt = 'X';
				img.title = 'Close';
				img.src = this.options.service_host + '/img/popup-close-btn.png';

				var iframe = document.createElement("iframe");
				iframe.id = 'gpor_auth_main_ifr';
				iframe.name = 'gpor_auth_main_ifr';
				iframe.width = this.options.width;
				iframe.height = this.options.height;
				iframe.allowTransparency = 'true';

				iframe.scrolling = 'no';
				iframe.frameBorder = '0';
				var loadingImage = "data:image/gif;base64,R0lGODlhEAAQAPQAAKSvif///6awi+rs5M/Uwfv8+/Dy7LK7m8LJsPb389TZx9nez623lMjOt7fAouTn3N/j1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==";
				var GporWaitTemplate = "<html><body style='height:400px;'><head><link rel='stylesheet' type='text/css' href='" + this.options.service_host + "/css/b-popup-subscribe__popup.css'></head><div class='b-popup-subscr__frame' style='width: 560px;'><div class='blc-cn blc-tl'></div><div class='blc-cn blc-tr'></div><div class='b-popup-subscr__content'><div class='b-popup-subscr__left-line'></div><div class='b-popup-subscr__right-line'></div><div class='b-popup-subscr__content_pad'>" +
				                       "<div style='height: 100px;'><div style='position: absolute; border-radius:3px; top:50%; text-align: center; left:50%; width:210px; height:36px; margin:-18px 0 0 -105px; line-height:36px; background: #a4af89 url(" + encodeURI(loadingImage) + ") no-repeat 25px 50%; color:#fff; font-size: 14px; font-family: sans-serif;'> Загрузка данных</div></div>" +
				                       "</div></div><div class='blc-cn blc-bl'></div><div class='blc-cn blc-br'></div></div></body></html>";
				iframe.src = "javascript:\"" + GporWaitTemplate + "\"";

				// appends
				cntDiv.appendChild(img);
				cldDiv.appendChild(cntDiv);
				cldDiv.appendChild(iframe);

				try {
					cldDiv.style.paddingTop = (window.innerHeight - 350) / 2 + 'px';
				} catch (e) {
					cldDiv.style.paddingTop = '100px';
				}
				cldDiv.style.paddingLeft = 0;
				cldDiv.style.height = '2000px';
				cldDiv.style.width = document.body.clientWidth + 50 + 'px';
				// создание контейнера для формы
				document.body.appendChild(cldDiv);
				// форма загружена
				this.loaded = true;

				function onJSLoad() {
					if (!self.isMobile()) {
						if (iframe.detachEvent)
							iframe.detachEvent('onload', onJSLoad);
						else
							iframe.removeEventListener('load', onJSLoad, false);
						iframe.setAttribute('src', self.options.auth_url + providerUse);
					}
				}
				if (iframe.attachEvent)
					iframe.attachEvent('onload', onJSLoad);
				else
					iframe.addEventListener('load', onJSLoad, false);

				iframe.src = "javascript:\"" + GporWaitTemplate + "\"";
			}
			if (!this.isMobile()) {
				// показать форму
				document.getElementById('gpor_auth_form').style.display = '';
			} else {
				document.location = this.options.auth_url + providerUse;
			}
			return false;
		},
		/**
		 * Trying to direct login
		 * @param provider
		 * @return {Boolean}
		 */
		fastLogin:          function (provider) {
			if (provider !== null && this.providers[provider] !== undefined && this.providerAccepted(this.providers[provider].id)) {
				var popupOptions = this.providers[provider].jsArguments.popup;
				var popup = window.open(this.options.service_host + "/login/?service=" + provider, "yii_eauth_popup", "width=" + popupOptions.width + ",height=" + popupOptions.height /*+ ",left=" + centerWidth + ",top=" + centerHeight*/ + ",resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=yes");
				var WatchPopupWindowClosed = function () {
					if ((!popup || popup.closed)) {
						window.location.reload();
					}
				};
				popupWindowTimer = setInterval(WatchPopupWindowClosed, 500);
				return true;
			}
			return false;
		},
		/**
		 * Checks if user accepted provider
		 * @param {String} providerId Provider id
		 * @return {Boolean}
		 */
		providerAccepted:   function (providerId) {
			return !!(this.cookie['readedDoc-' + providerId] == 1);
		},
		/**
		 * Ejects parametr from GET query
		 * @param link url
		 * @param key param
		 * @return {String}
		 */
		getQueryStringValue:function (link, key) {
			var url_str = link.href;
			var query_str = url_str.match(/^[^?]*(?:\?([^#]*))?(?:$|#.*$)/)[1]
			var _query_regex = new RegExp("([^=]+)=([^&]*)&?", "g");
			while ((match = _query_regex.exec(query_str)) != null) {
				if (decodeURIComponent(match[1]) == key) {
					return decodeURIComponent(match[2]);
				}
			}
			return '';
		},
		/**
		 * Hides auth widget
		 */
		close:              function () {
			document.getElementById('gpor_auth_form').style.display = 'none';
		},
		/**
		 * Window resize handler
		 */
		resize:             function () {
			var frm = document.getElementById('gpor_auth_form');
			if (frm) {
				frm.style.width = document.body.clientWidth + 50 + 'px';
				try {
					frm.style.paddingTop = (window.innerHeight - 350) / 2 + 'px';
				} catch (e) {
					frm.style.paddingTop = '100px';
				}
			}
		},
		/**
		 *
		 * @param {String} className
		 * @param node Node
		 * @return NodeList
		 */
		findClass:          function (className, node) {
			if (document.getElementsByClassName) return (node || document).getElementsByClassName(className);
			else {
				var node = node || document, list = node.getElementsByTagName('*'), length = list.length, Class = className.split(/\s+/), classes = Class.length, array = [], i, j, key;
				for (i = 0; i < length; i++) {
					key = true;
					for (j = 0; j < classes; j++) if (list[i].className.search('\\b' + Class[j] + '\\b') == -1) key = false;
					if (key) array.push(list[i]);
				}
				return array;
			}
		},
		/**
		 * Adds event listener to DOM element
		 * @param {Object} obj Node callback attach to
		 * @param {String} type event name (without 'on')
		 * @param {Function} fn callback
		 */
		addEvent:           function (obj, type, fn) {
			if (obj.addEventListener) {
				obj.addEventListener(type, fn, false);
			} else if (obj.attachEvent) {
				obj.attachEvent("on" + type, fn);
			} else {
				obj["on" + type] = fn;
			}
		},
		/**
		 * Returns iframe document
		 * @return {Object} iframe document
		 */
		widget:             function () {
			var iframeNode = document.getElementById('gpor_auth_main_ifr');
			if (iframeNode.contentDocument) {
				return iframeNode.contentDocument;
			}
			if (iframeNode.contentWindow) {
				return iframeNode.contentWindow.document;
			}
			return iframeNode.document;
		},
		createCookie:       function (name, value, days) {
			var expires = "";
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "; expires=" + date.toGMTString();
			}
			document.cookie = name + "=" + value + expires + "; path=/";
		},
		readCookie:         function (name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
			}
			return null;
		}
	};
}
GporAuth.addEvent(window, 'load', function(){GporAuth.init({"width":560,"height":553,"returnUrl":"http:\/\/66.ru\/skidki\/company\/ishop\/","redirectUrl":"http:\/\/66.ru\/newgporlogin\/","providers_set":"66,vk,lj,fb,tw,yandex","noClose":"","service_host":"http:\/\/auth.66.ru"})});
			var oHead = document.getElementsByTagName('HEAD').item(0);
			var oScript= document.createElement("script");
			oScript.type = "text/javascript";
			oScript.src='http://auth.66.ru/providers/';
			oHead.appendChild( oScript);