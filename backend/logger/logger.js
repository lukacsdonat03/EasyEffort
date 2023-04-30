const cron = require('node-cron')
const sequelize = require("../database/databaseConfig");
const initModels = require('../models/init-models')


const models =  initModels(sequelize)
const User = models.user
const History = models.history

function schedule(){
    cron.schedule('0 0 * * *',async ()=>{

        // Log the caloric intake for all users for the day
        const users = await User.findAll()
        const promises = users.map(user=>{
            //alapértelmezetten a date mező értéke CURRENT TIMESTAMP
            return History.create({userId:user.id,total_cal:user.currentCalorie})
        })
        await Promise.all(promises)
        await User.update({currentCalorie:0})
    
        console.log(`All calories logged for ${new Date()}`);
    })
}

module.exports = schedule