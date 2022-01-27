import React, { Fragment, useEffect, useState} from "react";
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios";
import Grid from '@mui/material/Grid';
import MovieCard from "./MovieCard";

const Home = () => {
    const {isAuthenticated, isLoading} = useAuth0()
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        moviesApiCall()
    },[0])
    
    if (isLoading){
        return <div><h1>Loading...</h1></div>
    }

    const moviesApiCall = () =>{
        axios.get('movies.json')
            .then((response) => {
                const apiResponse = response.data.entries
                setMovie(apiResponse)
        })
    }

    return(
        isAuthenticated && (
            <Fragment>
                <h1>HOLA</h1>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid item xs={10}>
                        <Grid container spacing={2}>
                            {
                                movie.map(singleMovie =>{
                                    return(
                                        <Grid item lg={2} xs={12} md={4}>
                                            <MovieCard 
                                            container
                                            movieImage={singleMovie.images}/>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        )
    )
}

export default Home