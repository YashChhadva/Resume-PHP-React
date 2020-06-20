import React , {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IntroImage from './introimage.js';
import Hobbies from './hobbies.js';
import Interests from './interests.js';
import Education from './education.js';
import axios from 'axios';
import Projects from './projects.js';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function Intro(props) {
  console.log(typeof(props.login));
  const classes = useStyles();
  const str = "yashchhadva@gmail.co";
  const str1 = props.login.toString();
  let ret = () => {
    if(str1 === str){
      return(
        <div>
        <h3>Hobbies</h3>
        <Hobbies/>
        <h3>Interests</h3>
        <Interests/>
        <h3>Education</h3>
        <Education/>
        <h3>Projects</h3>
        <Projects/>
      </div>
      )
    }else
      return <h1>Login to continue</h1>
  }
  return (
    <div>
    {ret()}
    </div>
  )
}