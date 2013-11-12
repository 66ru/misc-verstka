		/*
		Usage:
			jQuery(document).ready(function() {
				jQuery("#ticka").flipTopBtn({
					leftBorder: jQuery("#body-wrap"), 
					botBorder: jQuery("#foot-wrap"), 
					botBorderPadding: 10, 
					scrollHeight: 300
				});
				jQuery("#ticka").click(function() {
					jQuery().animate({scrollTop : 0},'100');
				});
			});
		*/
        ;(function (jQuery, window, document, undefined) {
 
          var pluginName = "flipTopBtn",
            defaults = {
              propertyName: "value"
            };
         
          function Plugin( element, options ) {
            this.element = element;
            this.options = jQuery.extend( {}, defaults, options) ;
            this._defaults = defaults;
            this._name = pluginName;
            this.init(element);
          }
         
          Plugin.prototype.init = function (el) {
            var leftBorder = this.options.leftBorder;
            var botBorder = this.options.botBorder;
            var botBorderPadding = this.options.botBorderPadding;
            var scrollHeight = this.options.scrollHeight;
            var showed = 0;
            
            function checkLeftAndBottom() {
                jQuery(el).css("left", jQuery("#body").offset().left + 17 + "px");
                if (jQuery(window).scrollTop() + jQuery(window).height() + botBorder.height() > jQuery(document).height()) {
                  jQuery(el).css({bottom: jQuery(window).height() - jQuery(document).height() + jQuery(window).scrollTop() + botBorderPadding + botBorder.height() + "px"});
                }
            }
            
            function animate(showed) {
              if (showed == 0) {
                jQuery(el).animate({
                  bottom: '-200px', 
                  opacity: '0'
                }, 200);
              } else {
                jQuery(el).animate({
                  bottom: '10px', 
                  opacity: '1'
                }, 200, function(){ 
					checkLeftAndBottom(); 
				});
              }
            }           
            
            jQuery(document).scroll(function(e) {
                if (jQuery(document).height() < jQuery(window).height() + scrollHeight) {
                  return;
                } else {
					jQuery(el).css("bottom", "10px");
				}
                preStep = showed;
                (jQuery(window).scrollTop() > scrollHeight) ? showed = 1 : showed = 0;
                (showed != preStep) ? animate(showed) : void(0); //анимация должна происходить при смене значения showed
                checkLeftAndBottom();
            });
          };
          
          jQuery.fn[pluginName] = function ( options ) {
            return this.each(function () {
              if ( !jQuery.data(this, "plugin_" + pluginName )) {
                jQuery.data( this, "plugin_" + pluginName, 
                new Plugin( this, options ));
              }
            });
          }
         
        })( jQuery, window, document );
