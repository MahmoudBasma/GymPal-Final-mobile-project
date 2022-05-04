qualifications.php
<?php

include("db_info.php");

$id = $_GET["user_id"];

$query = $mysqli->prepare("SELECT * FROM `qualifications` WHERE `TrainerID` = ?");
$query->bind_param("i", $id);
$query->execute();

$array = $query->get_result();

$response = [];

while($qualification = $array->fetch_assoc()){
    $response[] = $qualification;
}

$json_response = json_encode($response);
echo $json_response;

?>