/* Simple jQuery Contact Form with Validation 
   from http://www.formget.com/jquery-contact-form/
*/

$(document).ready(function() {
	$("#msg-button").on("click", function() {
		var name = $("#name").val();
		var email = $("#email").val();
		var useremail = $("#emailaddress").val();
		var message = $("#message").val();

		console.log(useremail);
		
		$("#returnmessage").empty(); // To empty previous error/success message.
		// Checking for blank fields.
		if (name == '' || email == '') {
			alert("Please Fill Required Fields");
		} else {
		// Returns successful data submission message when the entered information is stored in database.
			$.post("contact_form.php", {
				name1: name,
				email1: email,
				email2: useremail,
				message1: message
			}, function(data) {
				$("#returnmessage").append(data); // Append returned message to message paragraph.
				if (data == "Your message has been sent successfully.") {
					$("#form")[0].reset(); // To reset form fields on success.
				}
			});
		}
	});
});