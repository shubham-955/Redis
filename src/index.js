const express = require('express')
const connectToMongo = require('./config/db.js')

const postController = require('./controllers/post.controller')

const PORT = 8000;

connectToMongo()
let app = express();
app.use(express.json())

app.use("/posts", postController);

app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
})