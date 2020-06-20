<?php
require('C:\xampp\htdocs\xampp\connection.php');
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
	$request = json_decode($postdata);
	print_r($request);
	$int = $request->int;
	$prevvalue = $request->prevvalue;
	$link = $request->link;
	$prevlink = $request->prevlink;
	$sql = $sql = "UPDATE projects SET description='${int}',links='${link}' WHERE description='${prevvalue}'";
	print_r($sql);
	
	if(mysqli_query($conn , $sql))
		{
			http_response_code(200);
		}else{
			http_response_code(422);
		}
}



?>