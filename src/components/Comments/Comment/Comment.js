import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    cardHeader:{
        textAlign: "center",
        padding: 5
    }
})

const Comment = props =>{
    const { userId, description, date } = props;
    const classes = useStyles();
    return(
        <Card>
            <CardHeader classes={classes.cardHeader}
                title= {userId}
                date= {date}
             />
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Comment;