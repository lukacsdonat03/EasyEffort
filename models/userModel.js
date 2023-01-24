module.exports = (sequelize,DataTypes) => {
    const User  = sequelize.define("User",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true
        },
        email:{
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
            unique:true
        },
        password:{
            type: DataTypes.STRING,     //hashing miatt nem adom meg a mezo meretet
            allowNull: false,
            required: true
        },
        currentWeight:{
            type:DataTypes.DOUBLE
        },
        targetWeight:{
            type:DataTypes.DOUBLE
        },
        calorieId:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        targetCalorie:{
            type:DataTypes.INTEGER,
            allowNull: true,
        },
        
    }
    )
    return User;
}