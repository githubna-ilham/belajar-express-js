const express = require('express')

const app = express()
const port = 3333

app.get('/',(req,res) =>{
    res.send("Hello ini express lewat nodemon test")
})

app.listen(port,() => console.log(`Server running on port ${port}`))