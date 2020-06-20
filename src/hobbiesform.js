import React , {useState}from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export default function HobbiesForm(props) {
  const classes = useStyles();
  const [input, setInput] = useState(props.props.match.params.id?props.props.match.params.id:"");
 const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(input);

}

const handlesubmit =(e) =>{
  e.preventDefault();
  console.log(props.props);

  if(!props.props.match.params.id){
      let obj ={
        int : input,
        type:"hobbies"
    };
    try{
        axios.post('http://localhost/xampp/insert.php' , obj)
        .then(res=> console.log(res.data));
      
    //  console.log(obj);   
    }catch(e){
        console.log(e);
    }
     

  }else{
          let obj ={
            prevvalue : props.props.match.params.id,
            int : input,
            type:"hobbies"
        };
        try{
            axios.post('http://localhost/xampp/update.php' , obj)
            .then(res=> console.log(res.data));
         
          // console.log(obj);  
        }catch(e){
            console.log(e);
        }

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
          Insert Hobbies Here
        </Typography>
        <form className={classes.form} noValidate onSubmit={handlesubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Hobbies"
            name="email"
            autoComplete="email"
            autoFocus
            onChange ={handleChange}
            value={input}
          /> 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add
          </Button>   
        </form>
      </div>
     
    </Container>
  );
}