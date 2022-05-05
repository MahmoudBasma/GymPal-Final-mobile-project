<?php
header('Access-Control-Allow-Origin: *');

include("db_info.php");

$id = $_GET["user_id"];

$query = $mysqli->prepare("SELECT * FROM Fees WHERE TrainerID = ? ORDER BY Date DESC");
$query->bind_param("i", $id);
$query->execute();

$array = $query->get_result();

$response = [];

while($fee = $array->fetch_assoc()){
    $response[] = $fee;
}

$query = $mysqli->prepare("SELECT C.Name, J.TrainerID
FROM `customers` C, `customer-trainer` J
WHERE C.customerID = J.customerID and J.trainerID=?;");
$query->bind_param("i", $id);
$query->execute();

$array = $query->get_result();
while($fee = $array->fetch_assoc()){
    $response[] = $fee;
}

$json_response = json_encode($response);
echo $json_response;

?>