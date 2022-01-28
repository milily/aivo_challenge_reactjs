import React, { Fragment, useEffect, useState} from "react";
import friendlyKittyIcon from '../../assets/images/friendly-kitten-icon.png'
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
            }
        )
    }

    const OrderedByName = () =>{
        const sortedContent = [...streamingContent]
        sortedContent.sort(function (a, b) {
            return a.title.localeCompare(b.title)
        })
        setStreamingContent(sortedContent)
    }

    const orderedByYear = () =>{
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

    const filterByMovieSerieOrYear = (inputData) =>{ 
        const {
            nativeEvent:{
                target:{
                    value
                }
            }
        } = inputData

        const inputFilter = apiData.filter( contentType => {
            return contentType.title.toLowerCase().includes(value) || String(contentType.releaseYear).includes(value)
        })

        setStreamingContent(inputFilter)
    }

    return(
        <Fragment>
            <Grid container sx={{ justifyContent: 'center'}}>
                <Grid item >
                    <img
                        sx={{ justifyContent: 'center'}}
                        width={'120'}
                        src={friendlyKittyIcon}
                        alt={'kitty'}
                    />
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center'}}>
                <Grid item >
                    <Search onChangeEvent={filterByMovieSerieOrYear}/>
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center'}}>
                <Grid item>
                    <Button variant="contained" sx={{margin: 3}} onClick={() => OrderedByName()}>Ordenar por nombre</Button>
                    <Button variant="contained" onClick={() => orderedByYear()}>Ordenar por año</Button>
                </Grid>
            </Grid>
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