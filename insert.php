<?php
require('C:\xampp\htdocs\xampp\connection.php');
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
	$request = json_decode($postdata);
	print_r($request);
	$int = $request->int;
	$type=$request->type;


	if($type=="education"){
		$sql = "INSERT INTO eduacation VALUES ('{$int}')";	
	}elseif($type=="hobbies"){
		$sql = "INSERT INTO hobbies VALUES ('{$int}')";
	}elseif($type=="interests"){
		$sql = "INSERT INTO interests VALUES ('{$int}')";
	}

	
	if(mysqli_query($conn , $sql))
		{
			http_response_code(200);
		}else{
			http_response_code(422);
		}
}



?>