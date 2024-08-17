const mongoose = require('mongoose')

async function connectMongoDb(url){
    try{
        const connectionMake= mongoose.connect(url)
        return connectionMake;
    }
    catch(err){
        console.log("Error while connecting to Mongodb from Connection.js");
    }
}

module.exports ={
    connectMongoDb
}