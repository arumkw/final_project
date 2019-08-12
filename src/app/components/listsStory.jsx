import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from "../icons/baseline_favorite_border_black_18dp.png";
// import WorkIcon from '../icons/baseline_favorite_border_black_18dp.png';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflow:'auto',
    maxHeight:200,
  },
  avatar: {
    marginLeft:10,
    marginRight:10,
    border: 5
  },
  header: {
    backgroundColor: theme.palette.background.paper,
    paddingTop:1,
    paddingBottom:1,
    paddingLeft:25,
    width: '94%',
    // maxWidth: 335,
    color:'grey'
  },
}));

export default function ListStory() {
  const classes = useStyles();

  return (
      <div className='listStory'>
          <div className={classes.header}>
            <h5>Stories<a href="https://www.instagram.com">Watch All</a></h5>           

          </div>
        <List className={classes.root}>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt="Avatar" src="https://pre00.deviantart.net/714d/th/pre/i/2018/255/0/d/flat_face_design__1_by_scoolharis-dbip3p9.png" className={classes.avatar} />   
            </ListItemAvatar>
            <ListItemText primary={<b>yunaandco</b>} secondary="1 Day Ago" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt="Avatar" src="https://pre00.deviantart.net/714d/th/pre/i/2018/255/0/d/flat_face_design__1_by_scoolharis-dbip3p9.png" className={classes.avatar} />   
            </ListItemAvatar>
            <ListItemText primary={<b>sararobert</b>} secondary="2 Days Ago" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt="Avatar" src="https://pre00.deviantart.net/714d/th/pre/i/2018/255/0/d/flat_face_design__1_by_scoolharis-dbip3p9.png" className={classes.avatar} />
            </ListItemAvatar>
            <ListItemText primary={<b>rashawl</b>} secondary="7 Days Ago" />
        </ListItem>
        </List>
    </div>
  );
}