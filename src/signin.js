import React  , {useState, useEffect}from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link ,Redirect} from 'react-router-dom';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [mail , setMail] = useState("");
  const [password , setPassword] = useState("");

  const handlemailChange = (e) => {
    setMail(e.target.value);
    // console.log(input);

}

const handlepassChange = (e) => {
  setPassword(e.target.value);
  // console.log(input);

}

const handleSubmit = (e) => {
  e.preventDefault();

  let obj = {
    user : mail,
    pass : password
  }
  // console.log(obj);
  try{
    axios.post('http://localhost/xampp/login.php' , obj)
    .then((res)=>{
      console.log(res.status);
      if(res.status==200){
        console.log(res.data);
        props.handlelogin(res.data.email);
      }
       
      else
        return <Redirect to= '/'/>
    });
  
//  console.log(obj);   
}catch(e){
    console.log(e);
}
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange = {handlemailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange = {handlepassChange}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleSubmit}
          >
            Sign In
          </Button>
         
        </form>
      </div>
      
    </Container>
  );
}