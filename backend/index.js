const http = require('http');
const express = require('express')
const cors = require('cors');

const app=express();
const port = process.env.PORT || 4004;
app.use(cors());


// DataBase Connection
const my_db = process.env.MONGO_URL || `mongodb+srv://venomnvn:4WiZsBIgRP94yqa8@cluster0.ne2cxnd.mongodb.net/`;    // Connection
const mongoose = require('mongoose');   // Atlas URL

mongoose.connect(my_db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
    console.log("\nDB connected\nEnjoy Surfing");
});
//

 
app.get("/",(req,res) => {
    res.send("working");
})

app.listen(port,()=>{
    console.log(`run on the ${port}`);
})
