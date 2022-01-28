import React from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () =>{
    const { logout } = useAuth0()

    return(
        <Grid container sx={{ justifyContent: 'space-between' }}>
            <Typography component="div">
                <Box sx={{ fontFamily: 'Monospace', fontSize: '2rem', fontWeight: 'bold' }}>
                Star Kitty+
                </Box>
            </Typography>
            <p sx={{ fontSize: 16 }}></p>
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