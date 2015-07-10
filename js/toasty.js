(function($) {

	var toasty = {};
	
	var defaults = {
		sound 		: true,
 		sound 		: 'toasty.mp3',
 		image 		: 'toasty.png',
 		type 		: 'default', // word or default
 		typeWord 	: 'toasty'
	};

	var commands = {
		show: show
	};

	$.fn.toasty = function() {
        if (typeof arguments[0] === 'string') {
            var property = arguments[1];
            var args = Array.prototype.slice.call(arguments);
            args.splice(0, 1);
            createToasty(args);
            commands[arguments[0]].apply(this, args);
        }
        else {
            createToasty.apply(this, arguments);
        }
        return this;
    };

    function createToasty(options) {
    	toasty.settings = $.extend({}, defaults, options);
    	init();
    };

    function init(){
		$("body").append('<div id="toasty-box" style="position:fixed;right:-200px;bottom:0px;"><img src="'+ toasty.settings.image +'" alt="toasty"></div>');
		if(toasty.settings.sound)
			$("body").append('<audio id="toasty-audio"><source src="'+ toasty.settings.sound +'" type="audio/mpeg"></source></audio>');

		if(toasty.settings.type == 'word') {
			var typingTimer;
			var doneTypingInterval = 800;
			var typedWord = '';
			$('body').on('keyup', function(){
			    clearTimeout(typingTimer);
			    typingTimer = setTimeout(doneTyping, doneTypingInterval);
			});
			$('body').on('keypress', function(e) {
				var c = String.fromCharCode(e.charCode != null ? e.charCode : e.keyCode);
				typedWord += c.toLowerCase();
				if(typedWord == toasty.settings.typeWord) {
					show();
				};
			});
			$('body').on('keydown', function(){
			    clearTimeout(typingTimer);
			});
			var doneTyping = function() {
			    typedWord = '';
			}
		}
	};
	
	function show() {
		var audio = $('#toasty-audio')[0].play();
		$("#toasty-box").addClass("show-surprise");
		setTimeout( function(){ $("#toasty-box").removeClass("show-surprise"); }, 1000);
	};
	
})(jQuery);