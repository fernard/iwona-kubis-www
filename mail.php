<?php
  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  // header("Access-Control-Allow-Origin: *");

  if($_POST) {
    $to = 'pawel.kubis1989@gmail.com';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = 'Temat wiadomości: '.$subject.'<br> Od:'.$email.'<br> Treść wiadomości: '.$_POST['message'];

    mail($to,$subject,$message);
    $info = array('Status'=>'OK');
    echo json_encode($info);
  } else {
  echo json_encode(array('Status'=>'Błąd'));
}
