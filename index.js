const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: "This is the message"
    })
})

app.get('/dashboard', (req, res) => {
    res.json({
        message: "This is the dashboard if you're logged in"
    })
})

app.get('/dashboard/account', (req, res) => {
    res.json({
        message: "This is the account page"
    })
})

const port = process.env.PORT || 7700;
   
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});