const express = require('express')
const app = express()

app.use(()=>{
    console.log('hai server')
})

app.listen(4000)