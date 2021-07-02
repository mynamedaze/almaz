<?php
$name = $_POST['dname'];
$phone = $_POST['d-phone'];
$time = $_POST['d-time'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$time = htmlspecialchars($time);

$name = urldecode($name);
$phone = urldecode($phone);
$time = urldecode($time);

$name = trim($name);
$phone = trim($phone);
$time = trim($time);

$mess = "Заявка с mo-ex.ru: \n Имя: ".$name."\n Телефон: ".$phone."\n Удобное время: ".$time;

$message = $mess;
$email = $mail;
mail("imdaze@yandex.ru", "Заявка с mo-ex.ru", $mess,"From: imdaze@yandex.ru \r\n");