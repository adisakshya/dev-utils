const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./specs/specs.json');
var options = {
    swaggerOptions: {
      validatorUrl: null,
    }
}; 

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.listen(3000);

console.log('Documentation server started');
