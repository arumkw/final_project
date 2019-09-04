import React, { useState } from 'react';
import '../css/login.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      width: '350px',
    },
    box: {
        
    }
  }));

  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText('#f76262'),
      backgroundColor: '#f76262',
      '&:hover': {
        backgroundColor: '#c8dad3',
        color: theme.palette.getContrastText('#c8dad3'),
      },
      margin:"10px 10px 10px 23px",
      width:'350px',
    },
  }))(Button);



export default function Login ({kirimloggedIn}) {

    const classes = useStyles();

    const [values, setValues] = React.useState({
        username: '',
        password: '',
      });

    const handleChange = (username, password, redirect) => event => {
        setValues({ ...values, [username]: event.target.value, [password]: event.target.value, [redirect] : true});
    };

    const signin = () => {
        if (values.username === 'a') {
            if (values.password === 'a') {
                kirimloggedIn(true)
            } else {
                alert('Your password is incorect');
                kirimloggedIn(false)   
            }
        } else {
            alert('Sorry, your username is not registered');
            kirimloggedIn(false)
        }
    }

    return (
        <div className='login'>
            <div className='login-center'>
                <img src="https://s3.gifyu.com/images/logo_facegram.png" alt=""></img>
                <Box
                    id='test'
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '40%', height: '50%' }}
                    marginTop="85px"
                    paddingBottom="3em"
                >
                    <form className={classes.container} noValidate autoComplete="off" >
                        <p id='form-name-app'>facegram</p>
                        <TextField
                            id="outlined-name"
                            label="Username"
                            className={classes.textField}
                            value={values.name}
                            onChange={handleChange('username')}
                            // margin="10px"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            onChange={handleChange('password')}
                            // margin="10px"
                            variant="outlined"
                        />
                        <Link id="buttonSignIn" to="/main"><ColorButton variant="contained" color="primary" className={classes.margin} onClick={() => signin()}>Sign in</ColorButton></Link>
                        <i style={{textAlign:'center', width:'100%'}}>If you don't have an account, please <a href='http://localhost:3000'>register</a></i>
                    </form>
                </Box>
            </div>
            <div className='login-bottom'>
                <div style={{width:'50%'}}>
                    <p>
                    <a href='http://localhost:3000'>About us</a>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <a href='http://localhost:3000'>Jobs</a>
                    </p>
                </div>
                <div style={{width:'50%', textAlign:'right'}}>
                <i>&copy; 2019 FACEGRAM</i>
                </div>
            </div>
            </div>
    )
}