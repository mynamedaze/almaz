<?php
$name = $_POST['d-name'];
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

$message = urlencode($mess);

$token = "1872290864:AAElXXkBQh75STLVbCRR1-FWtNSoxnxXr2g"; //наш токен от telegram bot -а
$chatid = "-584668341"; //ИД чата telegrm

$tbot = file_get_contents("https://api.telegram.org/bot".$token."/sendMessage?chat_id=".$chatid."&text=".$message);

mail("admin@mo-ex.ru", "Заявка с mo-ex.ru", $mess,"From: admin@mo-ex.ru \r\n");