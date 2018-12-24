import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as postActions from '../store/actions/post';
import Post from './Post';
import NewPost from './NewPost';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
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
class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
           postsSize : 10
        } 
        this.props.getPosts(this.state.postsSize);      
        this.showMore = this.showMore.bind(this)
        this.sendPost = this.sendPost.bind(this)
    }

    showMore(){
        this.setState({
            postsSize: this.state.postsSize + 10
        })
        this.props.getPosts(this.state.postsSize + 10);      
    }

    sendPost(post){
        this.props.newPost(post)
    }
    

    render() {
        const {
            postList,
            classes
        } = this.props;

        const renderPosts = ()=>{
            return(
                <div>{
                    postList.map((post) =>{
                        return(
                            <Post key={post.id} title={post.title} body={post.body}/>)
                    })
                }</div>
            )
        }
        return (
            <div className={classes.root}>
                <NewPost sendPost = {this.sendPost}/>
                {renderPosts()}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Posts));
