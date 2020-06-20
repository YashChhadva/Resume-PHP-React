import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch as Sw, Route, Redirect,Link } from "react-router-dom";
import Intro from './intro.js';
import SignIn from './signin';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import kevin from './illuskevin.jpg';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import InterestsForm from './interestsform';
import HobbiesForm from './hobbiesform';
import EducationForm from './educationform';
import User from './user.js';
import ProjectForm from './projectform.js';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



function App() {

  const [login , setLogin] = React.useState("");
  console.log(login);
  const classes = useStyles();
  const [darkmode, setDarkmode] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setDarkmode(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout =() =>{
    setLogin("");
  }

  const theme = createMuiTheme(
    {
      palette:{
        type: darkmode ? "dark" : "light",
      }
    }
  );
  return (
    <ThemeProvider theme={theme}>
    <Paper style={{height:"100vh"}}>
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={darkmode} onChange={handleChange} aria-label="changemode" />}
          label={darkmode ? 'Dark' : 'Light'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
        <Avatar alt="Y" src={kevin} className = {classes.large}/>
        </Link>
          <Typography variant="h6" className={classes.title}>
          <Link to="/admin">
            ADMIN
            </Link>
          </Typography>
         
          <Button size="small" onClick={handlelogout}>Logout</Button>
          <Link to = '/sign-in'>
           <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              </Link>
        </Toolbar>
      </AppBar>
      <Sw>
         <Route exact path ='/admin'  render = {() => <Intro login={login}/>}/>
        <Route exact path= '/sign-in' render ={() => <SignIn login = {login} handlelogin={setLogin}/>} />
        <Route exact path= '/interests-form'  render={props => <InterestsForm props={props}/>}/>
         <Route  path= '/interests-form/:id'  render={props => <InterestsForm props={props}/>}/>
         <Route exact path= '/hobbies-form'  render={props => <HobbiesForm props={props}/>}/>
         <Route  path= '/hobbies-form/:id'  render={props => <HobbiesForm props={props}/>}/>
         <Route exact path= '/education-form'  render={props => <EducationForm props={props}/>}/>
         <Route  path= '/education-form/:id'  render={props => <EducationForm props={props}/>}/>
         <Route exact path= '/project-form'  render={props => <ProjectForm props={props}/>}/>
         <Route exact path= '/project-form/:id/:link'  render={props => <ProjectForm props={props}/>}/>
         <Route exact path ='/'  render = {() => <User/>}/>
        </Sw>
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
