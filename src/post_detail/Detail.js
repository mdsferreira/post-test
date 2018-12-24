import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as postActions from '../store/actions/post';
import Comment from './Comment';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },  
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    button:{
        textAlign: 'center',
    }
  });
class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentsCount : 3,
           postId : props.match.params.id
        } 
        this.props.getPost(props.match.params.id);
        this.props.getComments(props.match.params.id, this.state.commentsCount);       
        this.showMore = this.showMore.bind(this)
        
    }

    showMore(){
        let commentsCount = this.state.commentsCount === 3 ? 10 : this.state.commentsCount + 10;
        this.setState({
            commentsCount:  commentsCount
        })
        this.props.getComments(this.state.postId, commentsCount);      
    }

    render() {
        const {
            post,
            commentList,
            classes
        } = this.props;

        const renderComments = ()=>{
            return(
                <div>{commentList && commentList.length ?
                    commentList.map((comment) =>{
                        return(
                            <Comment 
                                key={comment.id} 
                                id={comment.id} 
                                name={comment.name} 
                                email={comment.email} 
                                body={comment.body}
                            />)
                    })
                    : ""
                }</div>
            )
        }
        return (
            <div className={classes.root}>
                <Grid container justify="center" spacing={24}>
                    <Grid item md={12}>
                        <Card className={classes.card}>
                            <CardHeader title={post && post.title ? post.title : ""}/>
                            <CardContent>
                                <Typography component="p">
                                    {post && post.body ? post.body : ""}                            
                                </Typography>
                            </CardContent>
                        </Card>                             
                    </Grid>          
                </Grid>
                {renderComments()}
                <Grid container justify="center" spacing={24}>
                    <Grid item md={10} className={classes.button}>
                    <Fab size="medium" color="secondary" aria-label="Add" onClick={this.showMore}>
                        <AddIcon />
                    </Fab>            
                    </Grid>          
                </Grid>
            </div>
        )
    }

}   
const mapStateToProps = (state) => ({
    ...state.post
})
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        ...postActions, 
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Detail));
