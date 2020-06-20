<?php
require('C:\xampp\htdocs\xampp\connection.php');

error_reporting(E_ERROR);
$hobbies = [];

$sql = "SELECT * FROM projects";

if($result = mysqli_query($conn , $sql))
{
	$cr = 0;
	while($row = mysqli_fetch_assoc($result))
	{
		$hobbies[$cr]['description'] = $row['description'];
		$hobbies[$cr]['links'] = $row['links'];
		$cr++;
	}

	echo json_encode($hobbies);
}

else{
	http_response_code(404);
}

?>