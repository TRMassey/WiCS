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

            $('#jsData').append('<br><a href="' + url + '">' + title + '</a>');
            $('#jsData').append('<br>' + desc + '<br>');
        }
    });
});

/****************************************************
*             Mobile Friendly Menu
*****************************************************/

$(document).ready(function () {
    var w = $(window).width();

    if (w < 601) {
        // hide the oregon state text
        jQuery('h1:first').hide();

        // hide the extraneous columns to keep formatting
        jQuery('.rightMain').hide();

        jQuery('.rightMainSecond').hide();
    }
});

// undo the above if the window is expanded
$(window).on('resize', function() {
    var win = $(this);

    if (win.width() > 760) {
        jQuery('h1:first').show();

        jQuery('.rightMain').show();

        jQuery('.rightMainSecond').show();
    }

    // does the same as above to handle the window being manually resized
    if (win.width() < 760) {
        // hide the oregon state text
        jQuery('h1:first').hide();

        // hide the extraneous columns to keep formatting
        jQuery('.rightMain').hide();

        jQuery('.rightMainSecond').hide();
    }
});

/*****************************************************************
    *             Connect to YouTube
    * Note: The YouTube Flash Player API and JavaScript Player API were
    * deprecated on January 27, 2015. This uses <iframe>, which is
    * compatible with modern browsers, but not IE 7.
    *
    * Citation: Google Developers, "Getting Started"
    * https://developers.google.com/youtube/iframe_api_reference
    ******************************************************************/
      
      /* loads the IFrame Player API */
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      /* create the payer at the specified location */
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'OWsyrnOBsJs',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      
      /* function to play  video */
      function onPlayerReady(event) {
        event.target.pauseVideo();

      }

      /* checks state, and stops video when done */
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
