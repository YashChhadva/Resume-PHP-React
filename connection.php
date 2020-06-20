<?php
session_start();
// $conn = new mysqli('localhost' , 'yash' , 'yash');
$conn=mysqli_connect("localhost","root","","project" , 3300);
if(!$conn){
	echo "db connectivity failed";
}else{
	// echo 'db connected ';
}
?>
