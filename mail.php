<?php

  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  $headers .= "From: biuro@iwona-kubis.pl";


  if($_POST) {
    $to = 'iwona@iwona-kubis.pl';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = '<!doctype html>
                <html>
                <head>
                <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
                <title>'.$subject.'</title>
                </head>
                <body>
                <h2>Nadawca: '.$email.'</h2>
                <p><b>Treść wiadomości:</b><br>'.$_POST['message'].'</p>
                </body></html>';

    mail($to,$subject,$message,$headers);
    $info = array('Status'=>'OK');
    echo json_encode($info);
  } else {
  echo json_encode(array('Status'=>'Błąd'));
}
