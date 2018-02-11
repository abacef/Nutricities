<?php
$ch = curl_init();
$data = "Rochester, NY, USA";
$data = rawurlencode($data);
$url = "https://developers.zomato.com/api/v2.1/cities?q=" . $data;
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
$headers = array();
$headers[] = "Accept: application/json";
$headers[] = "User-Key: 0a612313c1bc06055c4146d2e5532cae";
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}                                                                                                                                     curl_close ($ch);
echo $result;
?>  
