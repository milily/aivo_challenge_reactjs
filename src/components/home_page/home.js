import React, { Fragment, useEffect, useState} from "react";
import axios from "axios";
import Grid from '@mui/material/Grid';
import MovieCard from "./MovieCard";
import Button from '@mui/material/Button';

const Home = () => {
    const [movies, setMovies] = useState([])
    const [apiData, setApiData] = useState([])

    useEffect(()=>{
        moviesApiCall()
    },[])

    const moviesApiCall = () =>{
        axios.get('movies.json')
            .then((response) => {
                const apiResponse = response.data.entries
                setMovies(apiResponse)
                setApiData(apiResponse)
        })
    }

    const filterByProgramType = movieOrSerie =>{
        console.log(movieOrSerie)
        const filterByProgramType = apiData.filter( contentType => { return contentType.programType === movieOrSerie})
        setMovies(filterByProgramType)
        console.log(filterByProgramType)
    }


    return(
            <Fragment>
                <h1>HOLA</h1>
                <Button variant="contained" onClick={() => filterByProgramType('movie')}>Pelicula</Button>
                <Button variant="contained" onClick={() => filterByProgramType('series')}>Series</Button>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid item xs={10}>
                        <Grid container spacing={2}>
                            {
                                movies.map(singleMovie =>{
                                    return(
                                        <Grid item lg={3} xs={12} md={4}>
                                            <MovieCard 
                                            container
                                            movieImage={singleMovie.images}
                                            movieTitle={singleMovie.title}/>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
    )
}

export default Home