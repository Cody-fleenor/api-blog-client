import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles, responsiveFontSizes } from "@material-ui/core";

const useStyles = makeStyles({
    cardHeader:{
        textAlign: "center",
        padding: 0,
        textSize: '5px'
    }
})

const Comment = props =>{
    const { userId, description, date } = props;
    const classes = useStyles();
    return(
        <Card>
            <CardContent>
                <Typography variant="body2" component="p">
                    {userId}
                    {date}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Comment;