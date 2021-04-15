import React from 'react';
import { useSelector } from 'react-redux';
import {Grid} from '@material-ui/core';
import Comment from './Comment/Comment';
import useStyles from './styles';
import commentList from './testcomment';


const Comments = () => {
    const comments = useSelector((state) => state.comments );
    const getComment = commentObj => {
        return (
            <Grid item xs={12}>
                <Comment {...commentObj} />
            </Grid>
        );
    };
    return (
        <>
        <div>
            Comments
        </div>
        <Grid container spacing={1}>
            {commentList.map(commentObj => getComment (commentObj))}
        </Grid>
        </>
    );
};

export default Comments;