const mongoose = require('mongoose')

const URI = "mongodb+srv://poppct:0832018156pop@cluster0.hyi8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        })

        console.log(`Mongo DB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;