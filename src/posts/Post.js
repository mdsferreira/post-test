import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
      flexGrow: 1,
    }
});

export default withStyles(styles)((props) => { 
    return (
        <Grid key={props.key} container spacing={24} justify="center" >
            <Grid item md={10}>
                <Card className={props.classes.card}>
                    <Link to={"/posts/" + props.id} ><i className="fa fa-external-link"></i>
                    <CardHeader title={props.title}/>
                    </Link>                    
                    <CardContent>
                        <Typography component="p" >
                            {props.body}                            
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>          
        </Grid>
    )
})
