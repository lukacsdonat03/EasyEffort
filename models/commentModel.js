module.exports = (sequelize,DataTypes) => {
    const Comment = sequelize.define('comment',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement : true,
            allowNull: false,
            primaryKey: true
        },
        userId:{
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false
        },
        comment:{
            type: DataTypes.STRING(500),
            required: true,
            allowNull: false,
        }
        
    })
    return Comment;
}