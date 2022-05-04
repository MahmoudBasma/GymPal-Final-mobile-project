<?php
header('Access-Control-Allow-Origin: *');

include("db_info.php");

$id = $_GET["user_id"];

$query = $mysqli->prepare("SELECT * FROM Trainers WHERE TrainerID = ?");
$query->bind_param("i", $id);
$query->execute();

$array = $query->get_result();

$response = [];

while($trainer = $array->fetch_assoc()){
    $response[] = $trainer;
}

$json_response = json_encode($response);
echo $json_response;

?>