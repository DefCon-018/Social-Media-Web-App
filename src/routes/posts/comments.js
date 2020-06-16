const {Router} = require('express');
const route = Router();

route.get('/', (req, res)=>{
    res.send('<h1>hi</hi>')
})

module.exports = {
    commentsRoute: route
};