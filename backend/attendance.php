<?php
header('Access-Control-Allow-Origin: *');
include("db_info.php");

$data = json_decode(file_get_contents("php://input"), true);

$date = $data['date'];
$customer = $data['customer'];
$type = $data['type'];
$amount = $data['amount'];
$id = $data['id'];

$query = $mysqli->prepare(
    "INSERT INTO `fees` (`feeID`, `TrainerID`, `Date`, `Customer`, `SessionType`, `Amount`)
     VALUES (NULL,? , ?, ?, ?, ?);"
);
$query->bind_param("issss", $id, $date, $customer, $type, $amount);
$query->execute();

$response = [];
$response["status"] = "Mabrouk!";

$json_response = json_encode($response);
echo $json_response;


?>