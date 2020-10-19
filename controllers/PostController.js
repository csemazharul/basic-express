const Post = require("../Model/Post");

var theArray = [];
exports.allPost = (req, res) => {
    //const data = JSON.parse()
    let posts = Post.find()
        .then((post) => {
            res.render("frontend/post/post", { post, title: "blog" });
        })
        .catch((e) => {
            res.status("500");
        });
};

exports.postForm = (req, res) => {
    posts = Post.find()
        .then((posts) => {
            res.render("frontend/post/create", {
                posts,
                title: "blog",
            });
        })
        .catch((e) => {
            res.status("500");
        });

};
exports.createPost = (req, res) => {

    let { title, body } = req.body

    let postData = new Post({
        title,
        body,
        published: 1,
    });
    postData
        .save()
        .then(() => {
            res.redirect('post/create')

        })
        .catch((e) => {
            res.json(e);
        });
};
exports.singlePost = (req, res) => {
    //const single = theArray.filter(value=>value.id==req.params.PostId)
    let post = Post.findById(req.params.postId)
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            res.json(e);
        });
};

exports.updatePost = (req, res) => {
    let { title, body, published, id } = req.body;

    let postUpdate = Post.findOneAndUpdate({ _id: id }, {
            title,
            body,
            published,
        }, { new: true })
        .then((data) => {
            return res.redirect('/post/create')
        })
        .catch((e) => {
            return res.json(e);
        });
};

exports.deletePost = (req, res) => {
    let postDelete = Post.findByIdAndDelete(req.params.postId)
        .then((data) => {
            return res.redirect('/post/create')

        })
        .catch((e) => {
            return res.json(e);
        });
};