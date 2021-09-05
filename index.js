const app = require('./src/app');
const logger = require('./src/utils/logger');
const { connectToDB } = require('./src/utils/db');

const PORT = process.env.PORT || 3000;

connectToDB();

// console.log(process.env.NODE_ENV);

app.listen(PORT, () => {
  logger.info(`server is listening on port ${PORT}!!`);
});
