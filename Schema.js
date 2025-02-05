const mongoose = required("mongoose");

const CommentsSchema = new mongoose.Schema({
    UserName: {
        type : String,
    },
    Message :{
        type : String,
    },
    CommentedAt : {
        type: Date
    }
});

const BlogpostSchema = new mongoose.Schema({
    title :{
        type: String,
        required: true,
        unique: true,
        minlength : 5
    },
    Content : {
        type: String,
        required: true,
        minlength: 50
    },
    Author : {
        type: String,
    },
    Tags : {
        type: [String],

    },
    Category : {
        type: String,
        required: true,
        default: "General"
    },
    Likes : {
        type : [String],

    },
    CreatedAt : {
        type: Date,
        default: Date.now
    },
    UpdatedAt : {
        type: Date,
    
    },
    Comments : [CommentsSchema]
});

const Blogpost = mongoose.model("Blogpost", BlogpostSchema);
module.exports = Blogpost;