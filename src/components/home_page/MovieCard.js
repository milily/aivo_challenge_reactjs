import React, { Fragment, useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MovieCard = ({contentImage, contentTitle, contentYear}) =>{

    return(
        <Fragment>
            <Card >
                <CardActionArea>
                    <CardContent>
                        <CardMedia
                            component="img"
                            image={contentImage['Poster Art'].url}
                            alt="movies or series"
                        />
                        <Typography gutterBottom variant="h5" component="div">
                            {contentTitle}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {contentYear}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Fragment>
    )
}

export default MovieCard