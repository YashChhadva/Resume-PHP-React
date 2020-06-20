


<?php
require_once('C:\xampp\htdocs\xampp\connection.php');

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
  $request = json_decode($postdata);
$email=$request->user;
$pwd=$request->pass;
$sql ="SELECT * FROM user WHERE Email='${email}' AND Password='${pwd}'"; 
$result= mysqli_query($conn,$sql);
if(mysqli_num_rows($result))
{
  while($row=mysqli_fetch_assoc($result))
  {
    $email=$row["Email"];
    
    $_SESSION['email']=$email;
  }
 
  echo json_encode($_SESSION);
  // header("Location: localhost:3000/admin");
  http_response_code(200);
}
else
{
  // header("Location: localhost:3000/");
  http_response_code(422);

}

}
?>