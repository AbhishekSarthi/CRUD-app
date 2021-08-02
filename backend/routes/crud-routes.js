const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('/', async (req, res) => {
    // console.log(req.body,"hello");

    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
    });

    // console.log(post);
    try {
        const savedPost = await post.save();
        // console.log(savedPost);
        res.json(savedPost); // RESPONSE FOR CONSOLE
    } catch (err) {
        res.json({ message: err }); // RESPONSE FOR CONSOLE
    }
});

// GET All Posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        // console.log(posts);
        res.json(posts); // RESPONSE FOR CONSOLE
    } catch (err) {
        res.json({ message: err }); // RESPONSE FOR CONSOLE
    }
});

// FIND SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE POST
router.delete('/:postId', async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne({ _id: req.params.postId });
        res.json(deletedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//UPDATE POST
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    title: req.body.title,
                    body: req.body.body,
                    author: req.body.author,
                },
            }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
