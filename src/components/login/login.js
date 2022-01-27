import React, { Fragment} from "react";
import friendlyKittyIcon from '../../assets/images/friendly-kitten-icon.png'
import LoginForm from "./LoginForm";

const Login = () => {
    return(
        <Fragment>
            <h1>Star Kitty+ Plataforma de Streaming</h1>
            <img
                width={'25%'}
                src={friendlyKittyIcon}
                alt={'kitty'}
                loading="lazy"
            />
            <LoginForm />
        </Fragment>
    )
}

export default Login