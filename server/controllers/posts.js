import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;
    console.log(id)

    try {
        const post = await PostMessage.findById(id);
        console.log("get ID!!!")
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { Party, Office, Name, selectedFile, Incumbent } = req.body;

    const newPostMessage = new PostMessage({ Party, Office, Name, selectedFile, Incumbent })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// search by state
export const searchPost = async (req, res) => {
    const { state } = req.params;

    try {
        console.log(state)
        console.log("get state!!!")

        const post = await PostMessage.find({State :state});
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// search by name
export const searchName = async (req, res) => {
    const { name } = req.params;

    try {
        console.log(name)
        console.log("get Name!!!")

        const post = await PostMessage.find({Name :name});
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { Party, Office, Name, selectedFile, Incumbent } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { Name, Party, Office, Incumbent, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    if (post.likeCount == ""){
        post.likeCount = "YES!!";
    } else {
        post.likeCount = ""
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount}, { new: true });
    res.json(updatedPost);
}


export default router;