const express = require("express");
const app = express()
const port = process.env.PORT || 3001;
const cors = require('cors')

app.use(cors())

app.get('/', (req,res) => {
    res.send(JSON.stringify("Mern Test App"));
})

app.listen( port, () => {
    console.log(`Listening on port ${port}`)
})