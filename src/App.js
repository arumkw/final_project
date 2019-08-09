import React from 'react';
import { BrowserRouter as Router, Route , Redirect} from 'react-router-dom';
import './index.css';
import Main from './app/screen/main';
import Login from './app/screen/login';
import Coba from './app/screen/cobacoba';
// import Popup from './app/component/popup'

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            loggedIn : false,
            coba:99,
        }
    }

    handleLoggedIn = (value) => {
        this.setState({
            loggedIn: value
        })
        console.log('tiggered', value)
    }

    handleStateCoba = (value) => {
        this.setState({
            coba: value
        })
        console.log('coba')
    }

    render () {
        return (
            <div>
                <Router>
                    <div>
                        {/* <Coba masukgak={(e) => this.handleStateCoba(e)} /> */}
                        <Route exact path="/" component={() => <Login kirimloggedIn={(e) => this.handleLoggedIn(e) } /> } />
                        <Route path="/Main" component={Main} />
                        {/* <Route path="/Coba" component={() => <Popup title='LOGIN FAILED' content='Sorry, your username is not registered' /> } /> */}
                        <Route path="/Coba" component={Coba} />
                        <Route path="/Main" render={() => (
                        this.state.loggedIn ? (
                        <Redirect to="/Main"/>
                        ) : (
                            <Redirect to="/"/>
                        )
                        )}/>
                        {/* <Login exact kirimloggedIn={(e) => this.handleLoggedIn(e)} /> */}
                    </div>
                </Router>
            </div>
        );
    }
}