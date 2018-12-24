import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },  
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'right',
        color: theme.palette.text.secondary,
    },
});

class NewPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                title : '',
                body : '',
                userId: 1
            },
            bodySize : 0
        } 
        this.handleChangeBody = this.handleChangeBody.bind(this)
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        
    }

    handleChangeBody(event){
        if(event.target.value.length <= 100){
            this.setState({ 
                ...this.state,  
                post: {...this.state.post, body:event.target.value}, 
                bodySize : this.state.bodySize +1
            })
        }        
        else{
            event.target.value = event.target.value.substr(0, 100);
        }
    }

    handleChangeTitle = event => {
        this.setState({ 
            ...this.state,  
            post: {...this.state.post, title:event.target.value}
        })
    };

    render(){
        const {
            sendPost,
            classes
        } = this.props;

        return (
        <Grid container justify="center" spacing={24}>
            <Grid item md={12}>
                <Paper className={classes.paper}>
                    <TextField
                        id="outlined-name"
                        label="Title"
                        value={this.state.post.title}
                        onChange={this.handleChangeTitle}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                         InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    <TextField
                        id="outlined-full-width"
                        label="Post"
                        placeholder="Type your post"
                        helperText={`${this.state.bodySize}/100`}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        multiline
                        rows="4"
                        value={this.state.post.body}
                        onChange={this.handleChangeBody }
                    />
                    <Grid container justify="flex-end" >
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className={classes.button} 
                            onClick={()=>sendPost(this.state.post)}>
                            Send
                        </Button>
                    </Grid>
                </Paper>            
            </Grid>          
        </Grid>
        )
    }
}

export default withStyles(styles)(NewPosts)