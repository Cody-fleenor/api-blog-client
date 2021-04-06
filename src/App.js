import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from "./actions/posts";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import BlogImage from "./imgs/BlogImage.jpeg";
import useStyles from './styles';


const App = () =>{
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(()=> {
        dispatch(getPosts);
    }, [dispatch]);
    return(
        <Container maxwidth = "lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h4" align="center">
                    Portland Biking Blog
                    <img className={classes.images} src={BlogImage} alt="BlogImage" height="70em" />
                </Typography>
            </AppBar>
            <Grow in>
                <Grid container justify='space-between' alignItems='stretch' spacing= '3' >
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Form />
                    </Grid>
                </Grid>
            </Grow>

        </Container>

    )
}

export default  App;