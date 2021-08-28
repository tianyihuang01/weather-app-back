require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const helmet = require('helmet');

const router = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const swaggerDoc = require('./utils/swagger');

const app = express();

app.use(helmet());
const morganLog = process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');
app.use(morganLog);
app.use(express.json());
app.use(cors());

app.use('/v1/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use('/v1/api', router);
app.use(errorHandler);

module.exports = app;
