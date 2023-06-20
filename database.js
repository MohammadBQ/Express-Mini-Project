const mongoose = require("mongoose")
const dotEnv = require("dotenv")
dotEnv.config()

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_DB_URL)
    } catch(error){

    }
}

module.exports = connectDB