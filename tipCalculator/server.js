const express = require("express")
const server = express()
const PORT = process.env.PORT || 3000


server.get("/tip/:total/:tipPercentage", (req, res)=>{
    const total = parseFloat(req.params.total);
    const tipPercentage = req.params.tipPercentage / 100
    const tipTotal = total * tipPercentage
   
   
    res.status(200).json(`Please leave a tip of $${tipTotal.toFixed(2)}`);

});

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
});
