import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
const app = express();

const port = 7873;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(express.json());
app.use(bodyParser.json());
app.use(router);


app.listen(port, () => {
    console.log(`Our Book Club API is now available on port ${port}`)
})