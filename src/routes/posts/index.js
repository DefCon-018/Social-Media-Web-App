const {Router} = require('express');
const { createNewPosts, findAllPosts } = require('../../controlers/posts')
const route = Router();

route.get('/', async (req, res)=>{
    let posts = await findAllPosts();
    res.status(200).send(posts)
})
route.post('/', async (req, res)=>{
    const {userId, title, body} = req.body
    if((!userId) || (!title) || (!body)){
        res.status(400).send({
            error: "need userid, title, body to create post"
        })
    }
    const posts = await createNewPosts(userId, title, body);
    res.status(201).send(posts);
})

module.exports = {
    postsRoute: route
}