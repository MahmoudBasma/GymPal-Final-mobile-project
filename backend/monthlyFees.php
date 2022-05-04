<?php
header('Access-Control-Allow-Origin: *');

include("db_info.php");

$id = $_GET["user_id"];

$query = $mysqli->prepare("SELECT month(now()) as month,year(now()) as year, SUM(Amount) as total FROM fees 
                            WHERE month(Date)=month(now()) AND trainerID = ?;");
$query->bind_param("i", $id);
$query->execute();

$array = $query->get_result();
$response = [];

while($fee = $array->fetch_assoc()){
    $response[] = $fee;
}

$json_response = json_encode($response);
echo $json_response;

?>