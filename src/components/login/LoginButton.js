import React from "react";
//MUI Components
import Button from '@mui/material/Button';
//Auth0
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () =>{
    const {loginWithRedirect} = useAuth0()

    return (
        <Button 
            sx={{m:2}}
            variant="contained" 
            onClick={() => loginWithRedirect()}>Iniciar Sesión
        </Button>
    )
}

export default LoginButton
