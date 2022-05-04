<?php
header('Access-Control-Allow-Origin: *');

include("db_info.php");

$data = json_decode(file_get_contents("php://input"), true);

$id= $_GET['user_id'];
$specialty = $data['specialty'];

$query = $mysqli->prepare("UPDATE`trainers`  Set `trainers`.`Speciality` = ? Where TrainerID = ?;");
$query->bind_param("si", $specialty, $id);
$query->execute();


$response = [];
$response["status"] = "Mabrouk!";


$json_response = json_encode($response);
echo $json_response;

