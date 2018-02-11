<?php
//date, merchant, amount and token sent to CreateTransaction command
$date = urlencode($_POST['date']);
$merchant = urlencode($_POST['merchant']);
$amount = urlencode($_POST['amt']);
$token = urlencode($_POST['token']);
$partName = 'applicant';
$method1 = 'GET';
$url = 'https://www.expensify.com/api?command=CreateTransaction&authToken=' . $token . '&created=' . $date . '&amount=' . $amount .'&merchant=' . $merchant;

$curl2 = curl_init($url);
curl_setopt($curl2, CURLOPT_TIMEOUT, 5);
curl_setopt($curl2, CURLOPT_CONNECTTIMEOUT, 5);
curl_setopt($curl2, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($curl2);
curl_close($curl2);

echo $result;

?>
