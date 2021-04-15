import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from "./actions/posts";
import { Grid } from '@material-ui/core';
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
        <>
        <Grid container spacing = {1}>
            <AppBar/>
        </Grid>
        <Grid container spacing={1}>
            <Posts />
        </Grid>
        </>
    )
}

export default  App;