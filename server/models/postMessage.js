import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    State: String,
    Party: String, //title
    Office: String, //message
    Name: String, 
    Incumbent: [String],
    selectedFile: String,
    likeCount: { // mark
        type: String,
        default: "",
    },
    readmore: String,
    article1: String,
    article2: String,
    article3: String,
    article1Title: String,
    article2Title: String,
    article3Title: String,
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;