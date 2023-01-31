module.exports = (sequelize,DataTypes)=>{
    const Calorie = sequelize.define('calorie',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        calorie:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true
        },
        amount: {               //gramm
            type: DataTypes.INTEGER,
            allowNull: false
        },
        carbohydrate:{
            type: DataTypes.DOUBLE
        },
        protein:{
            type: DataTypes.DOUBLE
        },
        fat:{
            type: DataTypes.DOUBLE
        },
        category:{
            type:DataTypes.STRING(50),
            allowNull:true,
            required: false
        }
    })
    return Calorie;
}