<?php
header('Access-Control-Allow-Origin: *');
include("db_info.php");

$data = json_decode(file_get_contents("php://input"), true);

$certificate = $data['certificate'];
$source = $data['source'];
$year = $data['Year'];
$id = $data['TrainerID'];

$query = $mysqli->prepare(
    "INSERT INTO qualifications (QualificationID, TrainerID, Certificate, Year, source) 
    VALUES (NULL, ?, ? ,?, ?);"
);
$query->bind_param("isis", $id, $certificate, $year, $source);
$query->execute();

$response = [];
$response["status"] = "Mabrouk!";

$json_response = json_encode($response);
echo $json_response;


?>