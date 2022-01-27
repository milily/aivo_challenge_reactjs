import React, { Fragment, useEffect, useState} from "react";
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios";
// import SingleCard from "./SingleCard";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

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
                                            <Card >
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        image={singleMovie.images['Poster Art'].url}
                                                        alt="green iguana"
                                                    />
                                                </CardActionArea>
                                            </Card>
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