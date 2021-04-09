import React from 'react';
import useStyles from './styles';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";import Grid from '@material-ui/core/Grid';
import Comments from '/home/jacq/Desktop/API - Blog 04-06-21/client/src/components/Comments/Comments.js';

const Post = (props) => {
    const classes = useStyles();
    return (
        <>
        <Card>
            <CardHeader classes={classes.cardHeader}
                title= {props.userId}
                date= {props.date}
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <Grid item xs={12}>
                <Comments/>
            </Grid>
        </Card>
        </>
    )
}

export default Post;