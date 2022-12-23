import express from 'express'
const app = express()

app.get('/',(req,res)=>{
    res.send("<h1>docker is awesome 4</h1>")
})
app.get('/about',(req,res)=>{
    res.send(process.env.API_KEY)
})

app.listen(80,()=>{
    console.log("server running on 5000!")
})