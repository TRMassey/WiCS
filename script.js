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

/****************************************************
*             Data Insertion - News
*****************************************************/

$(document).ready(function() {
    $.getJSON('data.json', function(data) {


        for (var i = 0; i < data.length; i++) {
            var title;
            var url;
            var desc;

            // grab the data
            title = data[i].title;
            url = data[i].url;
            desc = data[i].desc;

            $('#jsData').append('<br><b>Article:</b> <a href="' + url + '">' + title + '</a>');
            $('#jsData').append('<br><b>Description:</b> ' + desc + '<br>');
        }
    });
});