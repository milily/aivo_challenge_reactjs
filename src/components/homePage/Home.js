import React, { Fragment, useEffect, useState} from "react";
//MUI Components
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
//Images or Logo
import friendlyKittyIcon from '../../assets/images/friendly-kitten-icon.png'
//Components
import CardContents from "./Card";
import Search from './Search'
//Axios for API call
import axios from "axios";


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
            }
        )
    }

    const orderedByName = () =>{
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
            return contentType.title.toLowerCase().includes(value.toLowerCase()) || String(contentType.releaseYear).includes(value.toLowerCase())
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
                    <Search onChangeEvent={filterByMovieSerieOrYear} /** method prop for Search component*/ />
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center'}}>
                <Grid item>
                    <Button variant="contained" sx={{margin: 3}} onClick={() => orderedByName()}>Ordenar por nombre</Button>
                    <Button variant="contained" onClick={() => orderedByYear()}>Ordenar por año</Button>
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        {
                            streamingContent.map((singleContent,index) =>{
                                return(
                                    <Grid item key={index} lg={3} xs={12} md={4}>
                                        <CardContents
                                            
                                            container
                                            contentImage={singleContent.images} /**Image prop for Card component*/
                                            contentTitle={singleContent.title} /**Title prop for Card component*/
                                            contentYear={singleContent.releaseYear} /**Release year prop for Card component*/
                                        />
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