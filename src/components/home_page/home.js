import React, { Fragment, useEffect, useState} from "react";
import Search from './Search'
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
                console.log(apiResponse)
        })
    }

    const filterByName = () =>{
        const sortedContent = [...streamingContent]
        sortedContent.sort(function (a, b) {
            return a.title.localeCompare(b.title)
        })
        setStreamingContent(sortedContent)
    }

    const filterByYear = () =>{
        const sortedContent = [...streamingContent]
        sortedContent.sort((a, b) => {
            if (a.releaseYear > b.releaseYear) {
                return -1;
            }
            if (b.releaseYear > a.releaseYear) {
                return 1;
            }
            return 0;
        })
        setStreamingContent(sortedContent)
    }

    return(
            <Fragment>
                <h1>HOLA</h1>
                <Search />
                <Button variant="contained" onClick={() => filterByName()}>Nombre</Button>
                <Button variant="contained" onClick={() => filterByYear()}>Año</Button>
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
                                            contentTitle={singleContent.title}
                                            contentYear={singleContent.releaseYear}/>
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