;(function (factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function ($) {
	'use strict';
	
	var defaults = {
		sound 		: true,
 		image 		: 'toasty.png',
 		sound 		: 'toasty.mp3',
 		type 		: 'default', // word or default
 		typeWord 	: 'toasty'
	};
	
    $.fn.toasty = function(options) {
		
		var countInstancias = this.length;
		if(countInstancias == 0) return this;
		if(countInstancias > 1){
			this.each(function(){$(this).toasty(options)});
			return this;
		}

		var toasty 		= {};
		toasty.el  		= this;
		toasty.settings = $.extend({}, defaults, options);
		
		var init = function(){
			$("body").append('<div id="toasty-box" style="position: fixed;right:-200px;bottom:0px;"><img src="'+ toasty.settings.image +'" alt="toasty"></div>');
			if(toasty.settings.sound)
				$("body").append('<audio id="toasty-audio"><source src="'+ toasty.settings.sound +'" type="audio/mpeg"></source></audio>');
		}
		
		var show = function() {			
			var audio = document.getElementById('toasty-audio');
			audio.play();
			$("#toasty-box").addClass("show-surprise");
			//setTimeout( function(){ $("#toasty-guy-dan").removeClass("show-dan"); }, 1000);          
		}

		if(toasty.settings.type == 'word') {
			var typedWord = '';
			$('body').on('keypress', function(e) {
				var c = String.fromCharCode(e.charCode != null ? e.charCode : e.keyCode);
				typedWord += c.toLowerCase();
				if(typedWord.length > 4) typedWord = typedWord.slice(1);
				if(typedWord == toasty.settings.typeWord) {
					toasty.el.show();
				};
			});
		}
		
		init();
				
		return toasty.el;
    };
	
}));