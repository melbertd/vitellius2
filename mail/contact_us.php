<?php
    // Check for empty fields
    if(empty($_POST['name'])      ||
    empty($_POST['email'])     ||
    empty($_POST['requestQoute'])     ||
    empty($_POST['company'])     ||
    empty($_POST['address'])     ||
    empty($_POST['subject'])     ||
    empty($_POST['message'])   ||
    empty($_POST['contact'])   ||
    empty($_POST['recipient'])   ||
    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
    {
    echo "No arguments Provided!";
    return false;
    }

    $recipient = strip_tags(htmlspecialchars($_POST['recipient']));
    $name = strip_tags(htmlspecialchars($_POST['name']));
    $email_address = strip_tags(htmlspecialchars($_POST['email']));
    $company = strip_tags(htmlspecialchars($_POST['company']));
    $address = strip_tags(htmlspecialchars($_POST['address']));
    $subject = strip_tags(htmlspecialchars($_POST['subject']));
    $contact = strip_tags(htmlspecialchars($_POST['contact']));
    $message = strip_tags(htmlspecialchars($_POST['message']));
    
    // Create the email and send the message
    $to = $recipient; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
    $email_subject = "$name - $subject";
    $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nCompany: $company\n\nPhone: $contact\n\nAddress: $address\n\nMessage:\n$message";
    $headers = "From: noreply@vitellius-logisticsinc.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
    $headers .= "Reply-To: $email";   
    mail($to,$email_subject,$email_body,$headers);
    return true;         
?>