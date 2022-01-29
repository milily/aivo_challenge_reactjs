import { Fragment } from 'react';
//Components
import Login from './components/login/Login';
import Home from './components/home_page/Home'
import LogoutButton from './components/login/LogoutButton';
//Styles
import './App.css';
//Authentication with Auth0
import { useAuth0 } from '@auth0/auth0-react' 


function App() {
    const {isAuthenticated, isLoading} = useAuth0()

    if (isLoading){
      return <div><h1>Loading...</h1></div>
    }

    return (
        <Fragment>
            {isAuthenticated ? (
                  <Fragment>
                      <LogoutButton />
                      <Home />
                  </Fragment>
                ): <Login />}
        </Fragment>
    );
}

export default App;
