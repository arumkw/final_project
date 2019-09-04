import React from 'react';
import Header from '../components/header';
import '../css/profile.css';
import { Avatar, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PropTypes from 'prop-types';


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

  function handleChange(event, newValue) {
    setValue(newValue);
  }

    return (
        <div>
        <div className='profile'>
            <Avatar style={{width:215, height:215, margin:'122px 0px 0px 392px'}} alt="Avatar" src='https://www.cdkstone.com.au/wp-content/uploads/2018/01/Portsea-Grey.jpg'/>
            <Avatar style={{width:200, height:200, margin:'130px 0px 0px 400px', position:'absolute'}} alt="Avatar" src='https://icon-icons.com/icons2/582/PNG/512/girl_icon-icons.com_55043.png'/>
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
        <div>
                <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Posts" >
                        <div>
                            ulalala
                        </div>
                    </Tab>
                    <Tab label="Saved" />
                    <Tab label="Tagged" />
                </Tabs>
                
                </Paper>
                <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
                </div>
        </div>
    )
}

export default Profile;