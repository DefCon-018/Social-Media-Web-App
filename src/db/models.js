const sequelize = require('sequelize');
const DataTypes = sequelize.DataTypes;

const db = new sequelize('mysocialmediadb', 'socialmediauser', 'socialpass', {
    dialect: 'mysql', 
    host: 'localhost'
})

const COL_ID_DEF = {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}

const COL_USERNAME_DEF = {
    type: DataTypes.STRING(30),
    uique: true,
    allowNull: false
}

const COL_TITLE_DEF = {
    type: DataTypes.STRING(140),
    allowNull: false
}
const Users = db.define('user', {
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF
})
const Posts = db.define('post', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})
const Comments = db.define('comment', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: DataTypes.TEXT('tiny'),
        allowNull: true
    }
})

Users.hasMany(Posts);
Posts.belongsTo(Users);

Users.hasMany(Comments);
Comments.belongsTo(Users);

Posts.hasMany(Comments);
Comments.belongsTo(Posts);

exports = module.exports = {
    db, Users, Posts, Comments
}