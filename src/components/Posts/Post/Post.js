import React from 'react';
import useStyles from './styles';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Comments from '/home/jacq/Desktop/API - Blog 04-06-21/client/src/components/Comments/Comments.js';
import { Button } from '@material-ui/core';

const Post = (props) => {
    const classes = useStyles();
    return (
        <>
        <Card style={{margin:'3px'}}>
            <CardHeader classes={classes.cardHeader}
                title= {props.userId}
                date= {props.date}>
            </CardHeader>
            <CardContent>
                <Button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href=`post/1`;
                }}>
                    Click Here
                </Button>
            </CardContent>
            <CardContent>
                <Typography variant="body2" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardContent>
                <Comments/>
            </CardContent>
        </Card>
        </>
    )
}

export default Post;