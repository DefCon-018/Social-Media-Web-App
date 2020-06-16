const {Posts, Users} = require('../db/models');

async function createNewPosts(id, title, body){
    const post = await Posts.create({
        body: body,
        title: title,
        userId: id
    })
    return post;
}

async function findAllPosts(query){
    const posts = await Posts.findAll({
        include: [Users]
    })
    return posts;
}

//test
// async function task(){
//     const posts = await showAllPosts();
//     console.log(posts)
//     for(let p of posts){
//         console.log(`${p.body} \n ${p.title}\n ${p.user.username}`);
//     }
//     
// }
// task();

module.exports = {createNewPosts, findAllPosts}

