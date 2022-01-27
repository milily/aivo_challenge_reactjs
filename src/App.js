import { Fragment } from 'react';
import Login from './components/login/Login';
import Home from './components/home_page/Home'
import LogoutButton from './components/login/LogoutButton';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const {isAuthenticated} = useAuth0()
    return (
        <div>
            {isAuthenticated ? (
                <Fragment>
                    <LogoutButton />
                    <Home />
                </Fragment>
            ): <Login />}
        </div>
    );
}

export default App;
