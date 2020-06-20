import React  , {useState , useEffect}from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import tech from './tech.jpg';
    import Paper from '@material-ui/core/Paper';
    import techback from './techback.png';

    import PropTypes from 'prop-types';
    import TreeView from '@material-ui/lab/TreeView';
    import TreeItem from '@material-ui/lab/TreeItem';
 
    import MailIcon from '@material-ui/icons/Mail';
    import DeleteIcon from '@material-ui/icons/Delete';
    import Label from '@material-ui/icons/Label';
    import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
    import InfoIcon from '@material-ui/icons/Info';
    import ForumIcon from '@material-ui/icons/Forum';
    import LocalOfferIcon from '@material-ui/icons/LocalOffer';
    import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
    import ArrowRightIcon from '@material-ui/icons/ArrowRight';
    import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) =>({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  root: {
    height: '100vh',
    flexGrow: 1,
    maxWidth: '50vw',
    
    
    margin:'auto',
    
  },

  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${techback})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },

  
}));

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover,
    },
    // '&:focus > $content, &$selected > $content': {
    //   backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
    //   color: 'var(--tree-view-color)',
    // },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor : theme.palette.secondary.light,
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

export default function User(props) {
  const classes = useStyles();
  const [edudata , seteduData] = useState([]);
  const [hobdata , sethobData] = useState([]);
  const [intdata , setintData] = useState([]);
  const [projdata , setprojData] = useState([]);
  const { post } = props;

  useEffect(()=>{
    axios.get('http://localhost/xampp/vieweducation.php')
    .then(res => {
        seteduData(res.data);
    })

    axios.get('http://localhost/xampp/viewhobbies.php')
    .then(res => {
        sethobData(res.data);
    })

    axios.get('http://localhost/xampp/viewinterests.php')
    .then(res => {
        setintData(res.data);
    })

    axios.get('http://localhost/xampp/viewprojects.php')
    .then(res => {
        setprojData(res.data);
    })
  } , [document.title])

  const hobbies = hobdata.map(data => 
    <StyledTreeItem
          
          labelText={data}
          labelIcon={FaceIcon}
          color="#3c8039"
          bgColor="#e6f4ea"
        />
    )

    const projects = projdata.map(data => 
          <StyledTreeItem
          labelText={"description: "+data.description + "\n" + "link:" + data.links}
          labelIcon={FaceIcon}
          color="#3c8039"
          bgColor="#e6f4ea"
        />
      )
    const education = edudata.map(data => 

            <StyledTreeItem
            labelText={data}
            labelIcon={FaceIcon}
            color="#3c8039"
            bgColor="#e6f4ea"
          />
      )
      const interests = intdata.map(data => 
        <StyledTreeItem 
              labelText={data}
              labelIcon={FaceIcon}
              color="#3c8039"
              bgColor="#e6f4ea"
            />
        )

  return (
    <div>
        <Paper className={classes.mainFeaturedPost}>
          {/* Increase the priority of the hero background image */}
         
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  Yash's Resume
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  Full Stack Web Developer with good amount of experience building interactive user friendly websites . I have experience building large scale dynamic websites .
                </Typography>
                
              </div>
            </Grid>
          </Grid>
        </Paper>
    
        <TreeView
      className={classes.root}
      // defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      // defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <StyledTreeItem nodeId="1" labelText="Hobbies" labelIcon={Label} >
      {hobbies}
      </StyledTreeItem>
    
      <StyledTreeItem nodeId="2" labelText="Interests" labelIcon={Label}>
      {interests}
      </StyledTreeItem>
      
      <StyledTreeItem nodeId="3" labelText="Education" labelIcon={Label}>
        {education}
      </StyledTreeItem>
      
      
      <StyledTreeItem nodeId="4" labelText="Projects" labelIcon={Label}>
        {projects}
      </StyledTreeItem>


    </TreeView>

    
    
    </div>
  );
};

