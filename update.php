<?php
require('C:\xampp\htdocs\xampp\connection.php');
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
	$request = json_decode($postdata);
	print_r($request);
	$int = $request->int;
	$prevvalue = $request->prevvalue;
	$type = $request->type;

	if($type=="education"){
		$sql = "UPDATE eduacation SET eduname='${int}' WHERE eduname='${prevvalue}'";	
	}elseif($type=="hobbies"){
		$sql = "UPDATE hobbies SET hname='${int}' WHERE hname='${prevvalue}'";
	}elseif($type=="interests"){
		$sql = "UPDATE interests SET intname='${int}' WHERE intname='${prevvalue}'";
	}else{
		$sql = "UPDATE projects SET description='${int}' WHERE description='${prevvalue}'";
	}
	
	if(mysqli_query($conn , $sql))
		{
			http_response_code(200);
		}else{
			http_response_code(422);
		}
}



?>