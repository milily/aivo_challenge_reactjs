import React, { Fragment, useEffect, useState} from "react";
import axios from "axios";
import Grid from '@mui/material/Grid';
import MovieCard from "./MovieCard";
import Button from '@mui/material/Button';

const Home = () => {
    const [apiData, setApiData] = useState([])
    const [streamingContent, setStreamingContent] = useState([])
    
    useEffect(()=>{
        ApiContentCall()
    },[])

    const ApiContentCall = () =>{
        axios.get('streamingContent.json')
            .then((response) => {
                const apiResponse = response.data.entries
                setApiData(apiResponse)
                setStreamingContent(apiResponse)
        })
    }

    const filterByProgramType = movieOrSeries =>{
        const filterByProgramType = apiData.filter( contentType => { return contentType.programType === movieOrSeries})
        setStreamingContent(filterByProgramType)
    }

    return(
            <Fragment>
                <h1>HOLA</h1>
                <Button variant="contained" onClick={() => filterByProgramType('movie')}>Pelicula</Button>
                <Button variant="contained" onClick={() => filterByProgramType('series')}>Series</Button>
                <Button variant="contained" onClick={() => {return setStreamingContent(apiData)}}>Todo</Button>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid item xs={10}>
                        <Grid container spacing={2}>
                            {
                                streamingContent.map(singleContent =>{
                                    return(
                                        <Grid item lg={3} xs={12} md={4}>
                                            <MovieCard 
                                            container
                                            contentImage={singleContent.images}
                                            contentTitle={singleContent.title}/>
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