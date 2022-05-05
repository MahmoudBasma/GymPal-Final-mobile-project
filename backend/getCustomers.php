<?php
header('Access-Control-Allow-Origin: *');

include("db_info.php");

$id = $_GET["user_id"];

$query = $mysqli->prepare(
    "SELECT C.Name name, J.TrainerID, C.customerID
    FROM `customers` C, `customer-trainer` J
    WHERE C.customerID = J.customerID and J.trainerID=?;");
$query->bind_param("i", $id);
$query->execute();

$array = $query->get_result();

$response = [];

while($customer = $array->fetch_assoc()){
    $response[] = $customer;
}


$json_response = json_encode($response);
echo $json_response;

?>