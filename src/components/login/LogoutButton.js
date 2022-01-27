import React from "react";
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () =>{
    const { logout } = useAuth0()
    return <Button variant="contained" onClick={() => logout({returnTo: window.location.origen})}>Cerrar Sesión</Button>
}

export default LogoutButton