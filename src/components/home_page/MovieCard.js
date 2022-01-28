import React, { Fragment, useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MovieCard = ({movieImage, movieTitle}) =>{

    return(
        <Fragment>
            <Card >
                <CardActionArea>
                    <CardContent>
                        <CardMedia
                            component="img"
                            image={movieImage['Poster Art'].url}
                            alt="movies or series"
                        />
                        <Typography gutterBottom variant="h5" component="div">
                            {movieTitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Fragment>
    )
}

export default MovieCard