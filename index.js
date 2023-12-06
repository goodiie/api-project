const express = require('express');
const app = express();
const itemRouter = require('./src/routers/itemRoute');
const userRouter = require('./src/routers/userRoute')

const bodyParser = require('body-parser')

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(itemRouter);
app.use(userRouter);

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
});