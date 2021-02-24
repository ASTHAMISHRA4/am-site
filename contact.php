<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$header = "From : ".$email;

if(mail("mishra.astha@gmail.com","hcbgj","hello"))
{
    echo '<script type="text/javascript">
        window.location = "success.html"
    </script>';
}
else{
    echo '<script type="text/javascript">
    window.location = "failure.html"
    </script>';   
}

?>
