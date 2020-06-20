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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
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
  
}));

export default function Projects() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [data , setData] = useState([]);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(()=>{
    axios.get('http://localhost/xampp/viewprojects.php')
    .then(res => {
        setData(res.data);
    })
  } , [document.title]);


  const handleDelete = (name)=>{

    let obj ={
      int : name,
      type:"projects"
  };

    try{
      axios.post('http://localhost/xampp/delete.php' , obj)
      .then(res=> console.log(res.data));
      axios.get('http://localhost/xampp/viewprojects.php')
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
        <Link to="/project-form">
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
     
        return (
            <Card className={classes.root}>
            <CardContent>
              
              <Typography variant="h5" component="h2">
                {data.links}
              </Typography>
              
              <Typography variant="body2" component="p">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
                <Link to={"/project-form/"+data.description+"/"+data.links}>
              <Button size="small">Update</Button>
              </Link>
              <Button size="small" onClick={() => handleDelete(data.description)}>Delete</Button>
            </CardActions>
          </Card>
        );
      })}
    </Paper>
       
        </Slide>
      </div>
    </div>
  );
}