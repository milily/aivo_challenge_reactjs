import React from "react";
//Auth0
import { useAuth0 } from '@auth0/auth0-react'
//MUI Components
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const LogoutButton = () =>{
    const { logout } = useAuth0()

    return(
        <Grid container sx={{ justifyContent: 'space-between' }}>
            <Typography component="div">
                <Box sx={{ fontFamily: 'Monospace', fontSize: '2rem', fontWeight: 'bold' }}>
                Star Kitty+
                </Box>
            </Typography>
            <Grid item sx={{margin: 1}}>
                <Button 
                    variant="contained" 
                    startIcon={<LogoutIcon />}
                    onClick={() => logout({returnTo: window.location.origen})}>Cerrar Sesión</Button>
            </Grid>
        </Grid>
    ) 
}

export default LogoutButton