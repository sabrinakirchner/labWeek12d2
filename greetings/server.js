
const express = require("express")

const server = express()
const PORT = process.env.PORT || 3000

server.get("/greeting", (req, res)=>{
    res.status(200).json({message: "Hello, Stranger"})
})

server.get('/greeting/:name',(req,res) =>{
    const name= req.params.name;
    const greetings =[
        "whats up," + name + "!",
    ];

    const randomGreeting = greetings[Math.floor(Math.random()* greetings.length)];
    res.send(randomGreeting);
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})