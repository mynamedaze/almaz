<?php
$name = $_POST['dname'];
$phone = $_POST['d-phone'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);

$name = urldecode($name);
$phone = urldecode($phone);

$name = trim($name);
$phone = trim($phone);

$mess = "Вызов мастера бесплатно с mo-ex.ru: \n Имя: ".$name."\n Телефон: ".$phone;

$message = $mess;
$email = $mail;
mail("imdaze@yandex.ru", "Вызов мастера бесплатно с mo-ex.ru", $mess,"From: imdaze@yandex.ru \r\n");