/* basic horizontal slider, used for reading more info in side boxes */
$(document).ready(function(){
    $('.flip').click(function(){
        $('.panel').slideDown('slow');		/* more */
    });
    $('.panel').click(function(){
        $('.panel').slideUp('slow');		/* hide/less */
    });
});
