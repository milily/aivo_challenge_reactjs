import React, { Fragment, useEffect, useState } from "react";
import friendlyKittyIcon from '../../assets/images/friendly-kitten-icon.png'
import LoginForm from "./LoginForm";

const Login = () => {
    return(
        <Fragment>
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