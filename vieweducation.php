<?php
require('C:\xampp\htdocs\xampp\connection.php');

error_reporting(E_ERROR);
$hobbies = [];

$sql = "SELECT * FROM eduacation";

if($result = mysqli_query($conn , $sql))
{
	$cr = 0;
	while($row = mysqli_fetch_assoc($result))
	{
		$hobbies[$cr] = $row['eduname'];
		$cr++;
	}

	echo json_encode($hobbies);
}

else{
	http_response_code(404);
}

?>