const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const apiRouter = require('./utils/apiRouter')
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8080;


app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.json())
app.use(cookieParser());

app.use(session({
	secret: "vnpsdfjsdasdmfog",
	resave: true,
	saveUninitialized: true
}));
app.use('/api', apiRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`))