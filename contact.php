<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	header('Content-Type: text/html');

?>

<!DOCTYPE html>
<head>
	<title>Contact Us</title>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <link href='http://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="teststyle.css" />
	<script src="contact_form.js"></script>
</head>
<body>
    <!-- Fixed Navigation Bar w/logo and nav keys -->
    <div class="nav" align ="right">
      <h1>Oregon State University</h1>
        <ul id="menu">
          <li><a href="main.php">Home Page</a></li>
          <li><a href="about.php">About WiCS</a></li>
          <li><a href="resources.php" id="longer">Student Resources</a></li>
          <li><a href="career.php" id="longer">Career Resources</a></li>
          <li><a href="contact.php">Contact</a></li>
    </div>



    <!-- Fade from orange to pink behind main page picture, below nav bar -->
    <div class="topHalf" align="left">
        </br> <!-- on my computer, this fixes the overlap issues between moz/ie/chrome and the floating nav bar -->

        <!-- Our name will go here.. ignore the current picture -->
        <div class="header" align="center">
            <img alt="mainPic" width="90%" src="http://i58.tinypic.com/x4m01.png">
            <!-- give some extra padding with some background that is the samem color gradient fades to -->
            </br>
        </div>
        <hr>
    </div>    


    <section id="send-message">
        <!-- This div contains the html of the Contact Form API from http://www.formget.com/jquery-contact-form/-->
        <div class="leftMain" id="mainform" align="center">
            <h1>Can we help you? Send us a message!</h1>
            <form id="form">
                <label>Name: </label>
                <input type="text" id="name" placeholder="Name"/>
                <label>Email: </label>
                <input type="text" id="emailaddress" placeholder="Email"/>
                <label for="message">Message:</label>
                <textarea rows="8" name="message" id="message" placeholder="Message......."></textarea>
                <input type="button" id="msg-button" value="Send Message"/>
                <p id="returnmessage"></p>
            </form>
        </div>
    </section>
</body>
</html>