const { MongoClient } = require("mongodb");
const DB_NAME = "clients";
const URL = "mongodb+srv://crismaster:<password>@cluster0.ohm2a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var MongoConnection = () => new Promise(async (resolve, reject)=>{
    try {
        let client = new MongoClient (URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        await client.connect()
        resolve(client.db(DB_NAME))
    } catch (error) {
        reject(error)
    }
});

module.exports.MongoConnection = MongoConnection;