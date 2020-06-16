const express = require('express');
const app = express();
const {db} = require('./db/models');

const { usersRoute } = require('./routes/users');
const { postsRoute } = require('./routes/posts');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);

app.use('/', express.static(__dirname + '/public'));

db.sync().then(()=>{
    app.listen(8989, ()=>{
        console.log('server started');
    })
}).catch((err)=>{
    console.error(err);
})
