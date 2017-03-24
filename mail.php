<?php
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  // header("Access-Control-Allow-Origin: *");

  if($_POST) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    mail("pawel.kubis1989@gmail.com", $name, $email, $subject, $message);
    $info = ['Status' => 'OK'];
    echo json_encode($info);
  }
