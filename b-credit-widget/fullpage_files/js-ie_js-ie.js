 js_ie = function(obj) {
 
	 var defaults = {
		'containerSelector' : '', // 
	};

	var o = $.extend({}, defaults, obj);
	var _s = [];
	
	function _import(f) {
		if (_s[f] == null) {
			var e = document.createElement('script');
			e.type = 'text/javascript'; e.src = f;
			_s[f] = document.getElementsByTagName('head')[0].appendChild(e);
		}
		
	}

	this.init = function () {
		
		
		
		
		if ($.browser.msie && $.browser.version < '9') {
		
		
			$(".b-head__top__box__weather").addClass("rc");
			$(".b-head__top__box__weather").addClass("rc5");
			
			//_import('/js/rounded-corners.js');
			
			
			
			
		}
		

	

		
		
		
	}
	this.initUi = function () {
		
	}	
 }
