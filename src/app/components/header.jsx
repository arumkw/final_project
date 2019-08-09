import React from 'react';
import '../css/main.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 150,
    }
  }));

export default function Header () {
    const classes = useStyles();
    
    const [values, setValues] = React.useState({
      name: '',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
      
    return (
        <div className='oye'>
            <Container className='container'>
                <div>
                    <div className='head1'>
                        <Typography type="title" color="inherit" style={{ borderRight: '0.05em solid black', padding: '9px 10px 5px 100px', margin: '0.3em'}}>
                            <i className="material-icons md-48">face</i>
                        </Typography>
                        <span>&nbsp;&nbsp;</span>
                        <i style={{fontSize:'32px'}}>facegram</i>
                    </div>
                    <div className='head2'>
                        <TextField
                            id="standard-name"
                            label="Search you image"
                            className={classes.textField}
                            value={values.name}
                            onChange={handleChange('name')}
                        />
                    </div>
                    <div className='head3'>
                        <i className="material-icons md-48">face</i>
                        <i className="material-icons md-48">nature</i>
                    </div>
                </div>
            </Container>
        </div>
    );
}