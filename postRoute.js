const router = require('express').Router()
const {
    postForm,
    singlePost,
    allPost,
    createPost,
    updatePost,
    deletePost,

} = require('./controllers/PostController')
router.get('/', allPost)
router.get('/create', postForm)
router.get('/:postId', singlePost)

router.post('/', createPost)


router.post('/update', updatePost)

router.get('/delete/:postId', deletePost)

module.exports = router