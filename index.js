const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
require('dotenv').config();


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4bshi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const ServiceCollection = client.db('inventoryManage').collection('services');
    }
    finally{
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res)=>{
    res.send('node is running');
});

app.listen(port, ()=>{
    console.log('server is running', port)
});