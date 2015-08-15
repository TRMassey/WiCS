/* Simple jQuery Contact Form with Validation 
   from http://www.formget.com/jquery-contact-form/
*/

$(document).ready(function () {
	$("#msg-button").on("click", function () {
		var name = $("#name").val(),
		    useremail = $("#emailaddress").val(),
		    message = $("#message").val();
		
		$("#returnmessage").empty(); // To empty previous error/success message.
		// Checking for blank fields.
		if (name === '' || useremail === '') {
			alert("Please Fill Required Fields");
		} else {
		// Returns successful data submission message when the entered information is stored in database.
			$.post("contact_form.php", {
				name1: name,
				email1: useremail,
				message1: message
			}, function (data) {
				$("#returnmessage").append(data); // Append returned message to message paragraph.
				if (data === "Your message has been sent successfully.") {
					$("#form")[0].reset(); // To reset form fields on success.
				}
			});
		}
	});
});