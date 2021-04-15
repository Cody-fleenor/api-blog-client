import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from "./actions/posts";
import { Grow, Grid } from '@material-ui/core';
import Posts from "./components/Posts/Posts";
import AppBar from './components/AppBar';
import useStyles from './styles';


const App = () =>{
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(()=> {
        dispatch(getPosts);
    }, [dispatch]);
    return(
        <Grid container spacing = {1}>
            <AppBar/>
            <Grow in>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Posts />
                    </Grid>
                </Grid>
            </div>
            </Grow>
        </Grid>

    )
}

export default  App;