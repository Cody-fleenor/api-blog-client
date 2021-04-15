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
            <Grid item xs={12} lg={4}>
                <Post {...postObj} />
            </Grid>
        );
    };
    return (
        < div style={{margin:'3', padding:'3'}}>
            <Grid container spacing={2}>
                {postList.map(postObj => getPost(postObj))}
            </Grid>
        </div>
    );
};

export default Posts;