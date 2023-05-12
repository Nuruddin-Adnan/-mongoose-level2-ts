import mongoose from 'mongoose';
import app from './app';
const colors = require('colors');

const port: number = 5000

// database connection
async function dbConnect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-level2-ts');

        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`.green.bold)
        })
    } catch (error) {
        console.log(error.message);
    }
}

dbConnect();
