<?php
// echo 'console.log("inside php")';

$id=$fname=$lname=$gender=$email=$password=$pwd='';
if(isset($_POST['register']) && isset($_POST['firstname'])){
  // echo 'why is this printing';
  require_once('C:\xampp\htdocs\xampp\connection.php');
  $id=$_POST['id'];
  $fname=$_POST['firstname'];
  $lname=$_POST['lastname'];
  $email=$_POST['email'];
  $gender=$_POST['gender'];
  $pwd=$_POST['password'];
  $password = MD5($pwd);
  // echo 'before inserting';
  $sql="INSERT INTO user(ID,Firstname,Lastname,Gender,Email,Password)
    Values('$id','$fname','$lname','$gender','$email','$password')";
  // echo 'after inserting';

  $result=mysqli_query($conn,$sql);
  // echo $sresult;
  if($result)
  {
    // echo "<div class='form'>
    //                 <h3>You are registered successfully.</h3><br/>
    //                 <p class='link'>Click here to <a href='login.php'>Login</a></p>
    //                 </div>";
    // header("Location:login.php");
  }
  else
  {
    echo "error :".$sql;
  }
}


?>






