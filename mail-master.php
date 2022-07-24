<?php
$name = $_POST['d-name'];
$phone = $_POST['d-phone'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);

$name = urldecode($name);
$phone = urldecode($phone);

$name = trim($name);
$phone = trim($phone);

$mess = "Вызов мастера бесплатно с mo-ex.ru: \n Имя: ".$name."\n Телефон: ".$phone;

$message = urlencode($mess);

$token = "1872290864:AAElXXkBQh75STLVbCRR1-FWtNSoxnxXr2g"; //наш токен от telegram bot -а
$chatid = "-584668341"; //ИД чата telegrm

$tbot = file_get_contents("https://api.telegram.org/bot".$token."/sendMessage?chat_id=".$chatid."&text=".$message);

mail("admin@mo-ex.ru", "Вызов мастера бесплатно с mo-ex.ru", $mess,"From: admin@mo-ex.ru \r\n");