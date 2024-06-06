const mongoose = require('mongoose');

let trial = 0;
let maxTrial = 3;
let connection;
const DB = process.env.DB;

console.log("Connection DB");
const connectDB = async () => {
    try {
        connection = await mongoose.connect(DB);
        console.log('Connected DB');
    } catch (error) {
        if (trial < maxTrial) {
            console.log("trying again to connect DB");
            trial++;
            setTimeout(() => connectDB(), 3000);
        } else {
            console.log("Cannot connect DB max attempts reached ::", err);
            process.exit(1);
        }
    }
}
 module.exports = connectDB();