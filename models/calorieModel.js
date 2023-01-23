module.exports = (sequelize,DataTypes)=>{
    const Calorie = sequelize.define('Calorie',{
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
        amount: {    //gramm
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