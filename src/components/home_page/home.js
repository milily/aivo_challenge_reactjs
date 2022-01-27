import React from "react";
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {
    const {user, isAuthenticated, isLoading} = useAuth0()
    
    if (isLoading){
        return <div><h1>Loading...</h1></div>
    }

    return(
        isAuthenticated && (
            <h1>HOLA</h1>
        )
    )
}

export default Home