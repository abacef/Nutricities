<?php
$ch = curl_init();

$data = $_POST['location'];
$data = rawurlencode($data);

$url = "https://developers.zomato.com/api/v2.1/cities?q=" . $data;

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");

$headers = array();
$headers[] = "Accept: application/json";
$headers[] = "User-Key: 0a612313c1bc06055c4146d2e5532cae";
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);

$result = json_decode($result);
$id = $result->{"location_suggestions"}[0]->{"id"}; // finally - the location


// now search for the specific location
$ch = curl_init();

$url = "https://developers.zomato.com/api/v2.1/search?entity_id=" . $id;
$url = $url . "&entity_type=city&count=50";

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");

$headers = array();
$headers[] = "Accept: application/json";
$headers[] = "User-Key: 0a612313c1bc06055c4146d2e5532cae";
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);

echo $result;
?>
