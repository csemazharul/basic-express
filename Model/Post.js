const { Schema, model } = require('mongoose')

let postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
    },
    body: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,

    },
    published: {
        type: Boolean,
    },

})
let Post = model('post', postSchema)
module.exports = Post

module.exports = Post