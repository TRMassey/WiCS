<?php
	// Simple jQuery Contact Form with Validation 
	// from http://www.formget.com/jquery-contact-form/

	// Fetching Values from URL.

	$name = $_POST['name1'];
	$email = 'buckinja@onid.oregonstate.edu';
	$useremail = $_POST['email1'];
	$message = $_POST['message1'];
	$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
	$useremail = filter_var($useremail, FILTER_SANITIZE_EMAIL); 
	// After sanitization Validation is performed
	if (!(filter_var($useremail, FILTER_VALIDATE_EMAIL))) {
		echo "<span>* Invalid email. " . $useremail . " *</span>";
	} else if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$subject = "OSU Women in Computer Science message from " . $useremail;
		// To send HTML mail, the Content-type header must be set.
		$headers = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'From:' . $useremail. "\r\n"; // Sender's Email
		$headers .= 'Cc:' . $useremail. "\r\n"; // Carbon copy to Sender
		$template = '<div style="padding:50px; color:black;">Hello ' . $name . ',<br/>'
		. '<br/>Thank you for contacting OSU Women in Computer Science!  We will be in touch shortly.<br/><br/>'
		. '<br/>Your message was submitted as follows:<br/><br/>'
		. 'Name: ' . $name . '<br/>'
		. 'Email: ' . $useremail . '<br/>'
		. 'Message: ' . $message . '<br/><br/>'
		. '<br/></div>';
		$sendmessage = "<div>" . $template . "</div>";
		// Message lines should not exceed 70 characters (PHP rule), so wrap it.
		$sendmessage = wordwrap($sendmessage, 70);
		// Send mail by PHP Mail Function.
		mail($email, $subject, $sendmessage, $headers);
		echo "Your message has been sent successfully.";
	} else {
		echo "<span>* Invalid OSU WiSC email address *</span>";
	}
?>