<?php
$toEmail = "contact@asthamishra.me";
if(isset($_POST['userName']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])){
    $mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["email"] .">\r\n";
    if(mail($toEmail, $_POST["subject"], $_POST["message"], $mailHeaders)) {
        header("Location: success.html");
    } else {
        header("Location: failure.html");
    }}
    else{
    header("Location: failure.html");
}
?>