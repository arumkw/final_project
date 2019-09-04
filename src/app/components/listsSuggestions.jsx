import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
// import CommentIcon from '@material-ui/icons/Comment';
// import ImageIcon from "../icons/baseline_favorite_border_black_18dp.png";
// import WorkIcon from '../icons/baseline_favorite_border_black_18dp.png';

const useStyles = makeStyles(theme => ({
  root: {
    width: '101.9%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    maxHeight:200,
  },
  avatar: {
    marginLeft:10,
    marginRight:10,
    border: 5,
    width:30,
    height:30,
  },
  header: {
    backgroundColor: theme.palette.background.paper,
    paddingTop:1,
    paddingBottom:1,
    paddingLeft:25,
    width: '94%',
    // maxWidth: 335,
    color:'grey',
  },
  listitem: {
    marginTop:0,
    paddingTop:0,
    paddingBottom:0,
  },
}));

export default function ListsSuggestions({maping}) {
  const classes = useStyles();

  if (maping.length === 0){
    return (
        <div className='loading'>
            {/* <img className='loading-gif' src='https://kuis.football5star.com/images/ajax4.gif' alt=""/> */}
            {/* <img className='loading-gif' src='https://media.giphy.com/media/l4pTovXEp3vC1YBvW/giphy.gif' alt=""/> */}
            <h2> Please wait...</h2>
        </div>
    )
} else {
    return (
        <div className='listSuggestion'>
            <div className={classes.header}>
                <h5>Suggestions For You<a href="https://www.instagram.com">See All</a></h5>           
            </div>
            <List className={classes.root}>
            <ListItem className={classes.listitem}>
                <ListItemAvatar >
                    <Avatar alt="Avatar" src="https://pre00.deviantart.net/714d/th/pre/i/2018/255/0/d/flat_face_design__1_by_scoolharis-dbip3p9.png" className={classes.avatar} />   
                </ListItemAvatar>
                <ListItemText primary={<b>yunaandco</b>} secondary="1 Day Ago" />
                <ListItemSecondaryAction>
                <a href="www.instagram.com" style={{textDecoration:'none'}}>follow</a>
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem className={classes.listitem}>
                <ListItemAvatar>
                    <Avatar alt="Avatar" src="https://pre00.deviantart.net/714d/th/pre/i/2018/255/0/d/flat_face_design__1_by_scoolharis-dbip3p9.png" className={classes.avatar} />   
                </ListItemAvatar>
                <ListItemText primary={<b>sararobert</b>} secondary="2 Days Ago" />
                <ListItemSecondaryAction>
                <a href="www.instagram.com" style={{textDecoration:'none'}}>follow</a>
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem className={classes.listitem}>
                <ListItemAvatar>
                    <Avatar alt="Avatar" src="https://pre00.deviantart.net/714d/th/pre/i/2018/255/0/d/flat_face_design__1_by_scoolharis-dbip3p9.png" className={classes.avatar} />
                </ListItemAvatar>
                <ListItemText primary={<b>rashawl</b>} secondary="7 Days Ago" />
                <ListItemSecondaryAction>
                <a href="www.instagram.com" style={{textDecoration:'none'}}>follow</a>
                </ListItemSecondaryAction>
            </ListItem>
            </List>
        </div>
    );
}
}