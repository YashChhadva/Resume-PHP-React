import React  , {useState , useEffect} from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import {interests} from './data.js';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link , Redirect} from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },


  chiparr: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    width:'100vw',
    backgroundColor : theme.palette.secondary.main,
    // opacity: "50%",
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    zIndex:"-1",
  },
}));

export default function Interests() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [data , setData] = useState([]);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(()=>{
    axios.get('http://localhost/xampp/viewinterests.php')
    .then(res => {
        setData(res.data);
    })
  } , [document.title]);


  const handleDelete = (name)=>{

    let obj ={
      int : name,
      type:"interests"
  };

    try{
      axios.post('http://localhost/xampp/delete.php' , obj)
      .then(res=> console.log(res.data));
      axios.get('http://localhost/xampp/viewinterests.php')
    .then(res => {
        setData(res.data);
    })
     return <Redirect to='/' />;   
  }catch(e){
      console.log(e);
  }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
      <div style={{display:"flex" , width:"100vw", margin:"10px"}}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Link to="/interests-form">
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >Add</Button>
      </Link>
        </div>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Paper component="ul" className={classes.chiparr}>
      {data.map((data) => {
        let icon;
          icon = <IconButton aria-label="delete" >
            <Link to={"/interests-form/"+data}>
          <EditIcon fontSize="large" />
          </Link>
        </IconButton>;
        return (
          <li key={data}>
            <Chip
            size="large"
            variant="outlined"
            // color="primary"
              icon={icon}
              label={data}
              className={classes.chip}
              onDelete = {() => handleDelete(data)} 
            />
          </li>
        );
      })}
    </Paper>
       
        </Slide>
      </div>
    </div>
  );
}