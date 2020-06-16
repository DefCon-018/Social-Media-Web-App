const {Posts, Users} = require('../db/models');

async function createAllPosts(userId, title, body){
    const post = await Posts.create({
        body: body,
        title: title,
        userId: userId
    })
    return pos.dataValues;
}

async function showAllPosts(query){
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

