import React , { useState, useEffect } from 'react';
import Header from '../components/header';
import '../css/profile.css';
import { Avatar, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PropTypes from 'prop-types';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
 

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      marginLeft:30,
      fontSize:10,
    },
    input: {
      display: 'none',
    },
    root: {
        flexGrow: 1,
        marginTop:50,
        backgroundColor: '#f2f6f5',
      },
    root2: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
    gridList: {
        width: 800,
        height: 800,
      },
  }));

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

function Profile() {
    const classes = useStyles();
    const post=90;
    const followers=400;
    const following=90;
    const status='Don\'t just exist, live.';
    const href='instagram';
    const linkaddr = 'inilinknya';

  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  const [data, setData] = useState([]);
  
  useEffect(async () => {
    console.log(isLoading)
    const result = await axios(
      'https://my-json-server.typicode.com/arumkw/API_for_task/orriku',
    );
    setData(result.data);
    setIsLoading(false);
    console.log('ini adalah data')
    console.log(data.length==='undefined')
  }, []);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  // const tileData = data;

  if (isLoading) {
    return (
      <div className='loading'>
        <h2> Please wait...</h2>
      </div>
    )
  } 
  else {
    return (
        <div className='profilo'>
        <div className='profile'>
            <Avatar style={{width:215, height:215, margin:'122px 0px 0px 392px'}} alt="Avatar" src='https://www.cdkstone.com.au/wp-content/uploads/2018/01/Portsea-Grey.jpg'/>
            <Avatar style={{width:200, height:200, margin:'130px 0px 0px 400px', position:'absolute'}} alt="Avatar" src='https://cdn.imgbin.com/5/16/1/imgbin-face-avatar-man-sunglasses-face-s-itjjzi0h9kxU6m2SB7nRHdvZS.jpg'/>
            <div className='text_detail'>
                <div className='line_username'>
                    <p className='username'>Orriku</p>
                    <Button variant="outlined" className={classes.button}>
                        Edit Profile
                    </Button>
                </div>
                <div className='line_username'>
                    <p>{post} post &emsp; {followers} followers &emsp; {following} following</p>
                </div>
                <div>
                    <p id='full-name'><b>Arum Kusuma Wardani</b></p>
                    <p id='status'>{status}</p>
                    <Link href={href}>{linkaddr}</Link>
                </div>
            </div>
        </div>
        <div class="profilo">
          <Paper className={classes.root}>
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"s
            textColor="primary"
            centered
            >
              <Tab label="Posts" />
              <Tab label="Saved" />
              <Tab label="Tagged" />
            </Tabs>
          </Paper>
          <TabPanel value={value} index={0}>
            <div className={classes.root2}>
              <GridList cellHeight={200} className={classes.gridList} cols={3}>
                {data.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <div className={classes.root2}>
              <GridList cellHeight={200} className={classes.gridList} cols={3}>
                {data.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <div className={classes.root2}>
              <GridList cellHeight={200} className={classes.gridList} cols={3}>
                {data.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </TabPanel>
          </div>
          </div>
    )
                }
                
}

export default Profile;