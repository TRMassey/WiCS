<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	header('Content-Type: text/html');

?>

<!DOCTYPE html>
<head>
	<title>Contact Us</title>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<link rel="stylesheet" href="style.css" />
	<script src="contact_form.js"></script>
</head>
	<body>
		<div class="container">
			<br>
			<section class="top">
				<form action="logout.php" method="post" class="logout">
					<button type="submit">Logout</button>
				</form>
			</section>

			<section id="send-message">
				<form action="usersession.php" method="post">
					<button id="back-button" type="submit">Back to main page</button>
				</form>
				<!-- This div contains the html of the Contact Form API from http://www.formget.com/jquery-contact-form/-->
				<div id="mainform">
					<h2>Can we help you? Send us a message!</h2>
					<form id="form">
						<h3><?php echo "Message to " . $_POST["alert-id"];?></h3>
						<label>Name: <span class="red">*</span></label>
						<input type="text" id="name" placeholder="Name"/>
						<label>Email: <span class="red">*</span></label>
						<input type="text" id="email" placeholder="Email"/>
						<label for="message">Message:</label>
						<textarea rows="8" name="message" id="message" placeholder="Message......."></textarea>
						<input type="hidden" name="emailaddress" id="emailaddress" value=<?php echo $_POST["user-email"];?> />
						<input type="button" id="msg-button" value="Send Message"/>
						<p id="returnmessage"></p>
					</form>
				</div>
			</section>
		</div>
	</body>
</html>