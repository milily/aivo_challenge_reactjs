import React, { Fragment} from "react";
import LoginButton from "./LoginButton";
import friendlyKittyIcon from '../../assets/images/friendly-kitten-icon.png'
import LoginForm from "./LoginForm";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Login = () => {
    return(
        <Fragment>
            <Grid container sx={{ justifyContent: 'center', marginTop: 20}}>
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
        </Fragment>
    )
}

export default Login