// Need to put this ready function in on any js file to ensure HTML loads first.
$(document).ready(function() {


	$(function() {  
	    var pull        = $('#pull');  
	        menu        = $('#nav li.nav-list');  
	        menuHeight  = menu.height();  
	  
	    $(pull).on('click', function(e) {  
	        e.preventDefault();  
	        menu.slideToggle();  
	    });  
	});

	$(window).resize(function(){  
		var w = $(window).width();  
		if(w > 320 && menu.is(':hidden')) {  
		    menu.removeAttr('style');  
		};
	});


}); // End of ready function 

