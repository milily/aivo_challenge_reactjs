import React, { Fragment} from "react";
//Components
import LoginButton from "./LoginButton";
import LoginForm from "./LoginForm";
//Images or Logo
import friendlyKittyIcon from '../../assets/images/friendly-kitten-icon.png'
//MUI Components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Login = () => {
    return(
        <div id='container'>
            <Grid container sx={{ justifyContent: 'center'}}>
                <Grid item>
                    <Typography component="div">
                        <Box sx={{ fontFamily: 'Monospace', fontSize: '5rem', fontWeight: 'bold' }}>
                        Star Kitty+
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center'}}>
                <Grid item >
                    <img
                        width={'300'}
                        src={friendlyKittyIcon}
                        alt={'kitty'}
                    />
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center'}}>
                <Grid item>
                    <LoginForm />
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center'}}>
                <Grid item>
                    <LoginButton />
                </Grid>
            </Grid>
        </div>
    )
}

export default Login