<?php
require('C:\xampp\htdocs\xampp\connection.php');
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
	$request = json_decode($postdata);
	print_r($request);
	$int = $request->int;
	$link=$request->link;
	$sql = "INSERT INTO projects (description,links) VALUES ('{$int}','${link}')";
	print_r($sql);
	
	if(mysqli_query($conn , $sql))
		{
			http_response_code(200);
		}else{
			http_response_code(422);
		}
}



?>