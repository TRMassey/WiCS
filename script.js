/****************************************************
*			Horizontal slider
*****************************************************/
/* basic horizontal slider, used for reading more info in side boxes */

/* Upper right box */
$(document).ready(function(){
    $('.flip').click(function(){
        $('.panel').slideDown('slow');		/* more */
    });
    $('.panel').click(function(){
        $('.panel').slideUp('slow');		/* hide/less */
    });

/* lower right box */
    $('.flip2').click(function(){
        $('.panel2').slideDown('slow');		/* more */
    });
    $('.panel2').click(function(){
        $('.panel2').slideUp('slow');		/* hide/less */
    });
});
