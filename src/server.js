const express = require('express');
const app = express();
const {db} = require('./db/models');

db.sync({alter: true}).then(()=>{
    app.listen(8989, ()=>{
        console.log('server started');
    })
}).catch((err)=>{
    console.error(err);
})
