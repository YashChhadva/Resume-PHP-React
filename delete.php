<?php
require('C:\xampp\htdocs\xampp\connection.php');
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
	$request = json_decode($postdata);
	print_r($request);
	$int = $request->int;
	$type = $request->type;


	if($type=="education"){
		$sql = "DELETE FROM eduacation WHERE eduname='{$int}'";	
	}elseif($type=="hobbies"){
		$sql = "DELETE FROM hobbies WHERE hname='{$int}'";
	}elseif($type=="interests"){
		$sql = "DELETE FROM interests WHERE intname='{$int}'";
	}else{
		$sql = "DELETE FROM projects WHERE description='{$int}'";
	}


	
	if(mysqli_query($conn , $sql))
		{
			http_response_code(200);
		}else{
			http_response_code(422);
		}
}



?>