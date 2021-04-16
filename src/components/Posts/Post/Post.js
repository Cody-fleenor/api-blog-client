import React from 'react';
import useStyles from './styles';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CommentDropDown from '../../CommentDropDown';

const Post = (props) => {
    const classes = useStyles();
    return (
        <>
        <Card>
            <CardContent>
                <CardHeader classes={classes.cardHeader}
                    title= {props.userId}>
                </CardHeader>
                <Typography variant="body2" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardContent>
                <CommentDropDown />
            </CardContent>
        </Card>
        </>
    )
}

export default Post;