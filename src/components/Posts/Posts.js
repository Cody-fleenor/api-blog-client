import React from 'react';
import { useSelector } from 'react-redux';
import {Grid} from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';
import postList from '../Posts/testpost';

const Posts = () => {
    const posts = useSelector((state) => state.posts );
    const classes = useStyles();
    const getPost = postObj => {
        return (
            <div className={classes.root}>
                <Grid>
                    <Post {...postObj} />
                </Grid>
            </div>
        );
    };
    return (
        < div >
            <Grid container spacing={1}>
                {postList.map(postObj => getPost(postObj))}
            </Grid>
        </div>
    );
};

export default Posts;