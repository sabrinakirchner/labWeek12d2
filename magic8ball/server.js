const express = require("express")
const server = express()
const PORT = process.env.PORT || 3000
const ballResponse = ["It is certain", "It is decidedly so", 
"Without a doubt", "Yes definitely","You may rely on it", 
"As I see it yes", "Most likely", "Outlook good","Yes", 
"Signs point to yes", "Reply hazy try again", "Ask again later",
"Better not tell you now", "Cannot predict now", 
"Concentrate and ask again","Don't count on it", 
"My reply is no", "My sources say no","Outlook not so good", 
"Very doubtful"]

server.get("/magic/:question", (req, res)=>{
    const question = req.params.question
    const randomBallResponse = ballResponse[Math.floor(Math.random()*ballResponse.length)];
   //html response
    console.log(question, randomBallResponse);

    res.send(`The answer to '${question}?' is: ${randomBallResponse}.`)
    
    });

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})