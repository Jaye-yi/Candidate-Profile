import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost, searchPost, searchName, getPosts } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ State:'', Name: '', Party: '', Office: '', Incumbent: '', selectedFile: '' });
  const dispatch = useDispatch();
  const classes = useStyles();
  const post = useSelector((state) => (currentId ? state.posts.find((Office) => Office.this.state === currentId) : null));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ State:'', Name: '', Party: '', Office: '', Incumbent: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.State);

    if (currentId === 0) {
      if (postData.State != ''){
        dispatch(searchPost(postData.State));
      }

      if (postData.Name != ''){
        dispatch(searchName(postData.Name));
      }

      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Search by State'}</Typography>
        <TextField name="state" variant="outlined" label="Search by State here: e.g. IL" fullWidth value={postData.State} onChange={(e) => setPostData({ ...postData, State: e.target.value })} />
        <TextField name="name" variant="outlined" label="Search by Full Name here" fullWidth value={postData.Name} onChange={(e) => setPostData({ ...postData, Name: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Search</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="textPrimary" size="small" onClick={() => dispatch(getPosts())} fullWidth>Show All Candidates</Button>
      </form>
    </Paper>
  );
};

export default Form;
