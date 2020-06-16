const {Router} = require('express');
const route = Router();

route.get('/', (req, res)=>{
    res.send('send all posts')
})

module.exports = {
    postsRoute: route
}