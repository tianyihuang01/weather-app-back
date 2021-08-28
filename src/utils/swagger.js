const swaggerDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Weather Api',
      version: '1.0.0',
      contact: {
        name: 'Ted',
        email: 'Ted.Huang@outlook.com.au',
      },
    },
  },
  apis: ['./src/controllers/*.js'],
};

module.export = swaggerDoc(options);
