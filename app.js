const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send({message:"Welcome to KK's Home Page!!!"});
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Hello World, Its me KK!!");
});
