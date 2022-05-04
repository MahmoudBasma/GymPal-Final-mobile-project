<?php
eader('Access-Control-Allow-Origin: *');

include("db_info.php");

$data = json_decode(file_get_contents("php://input"), true);

$id= $_GET['user_id'];
$specialty = $data['specialty'];

$querry = mysqli_querry($con, 
"UPDATE `Qualification` SET `specialty VALUES $specialty
WHERE `id` = {$id}")
