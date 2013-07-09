 js_text_placeholder = function(obj) {
 
	 var defaults = {
		'containerSelector' : '', // 
		'searchEmpty' : '', // 
		'controlClass': '',
		'focusedClass': ''
	};

	var o = $.extend({}, defaults, obj);
	var searchEmptyStr = obj.searchEmpty;
	var serachControl = $("." + obj.controlClass);
	var focusedClass = obj.focusedClass;
	
	this.init = function () {
		serachControl.val(searchEmptyStr);
		serachControl.blur(function(){
			if(this.value==''){
				$(this).removeClass(focusedClass);
				$(this).val(searchEmptyStr);
			}
		}); 
		serachControl.focus(function(){
			if(this.value==searchEmptyStr){
				$(this).addClass(focusedClass);
				$(this).val('');
			}
		});			
	}
	this.initUi = function () {
		
	}	
 }
