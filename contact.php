<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_phone = $_POST['cf_phone'];
$field_message = $_POST['cf_message'];

$mail_to = 'divinepiepdx@yahoo.com';
$subject = '[Web Contact] '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Phone: '.$field_phone."\n";
$body_message .= 'Message: '.$field_message."\n";

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thanks! Your message has been sent.');
		window.location = 'index.html';
	</script>
<?php
}

else{ ?>
	<script language="javascript" type="text/javascript">
		alert('Oh no! Something went wrong. Please check that you have used a valid name and email, and re-submit, or send me an email directly at divinepiepdx@yahoo.com');
		window.location = 'index.html';
	</script>
<?php
}
?>