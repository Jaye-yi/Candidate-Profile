import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import Star from '@material-ui/icons/Star';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} Party={post.Party} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.Name}</Typography>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.Incumbent.map((Incumbent) => `#${Incumbent} `)} #{post.State}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{post.Party}</Typography>
      </div>
    
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Office: {post.Office}</Typography>
      </CardContent>
      
      <CardContent>
      <Typography className={classes.border} gutterBottom variant="h5" component="h2">News Articles:</Typography>
        <a href={post.article1} class="btn btn-primary btn-sm active" role="button" aria-pressed="true"><Typography variant="body2" color="textSecondary" component="p">{post.article1Title} </Typography></a>
        <a href={post.article2} class="btn btn-primary btn-sm active" role="button" aria-pressed="true"><Typography variant="body2" color="textSecondary" component="p">{post.article2Title} </Typography></a>
        <a href={post.article3} class="btn btn-primary btn-sm active" role="button" aria-pressed="true"><Typography variant="body2" color="textSecondary" component="p">{post.article3Title} </Typography></a>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><Star fontSize="small" /> MARK {post.likeCount} </Button>
        <a href={post.readmore} class="btn btn-primary btn-lg active" role="button" aria-pressed="true">More News</a>
      </CardActions>
    </Card>
  );
};

export default Post;
