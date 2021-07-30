const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send({message:"Welcome to KK's Home Page v2!!!"});
});

// the port variable taken from the environment so that it will use the port configured from AWS
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Hello World, Its me KK!!");
});
