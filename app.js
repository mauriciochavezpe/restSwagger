const app = require('./src/index');
const port = process.env.PORT || 8019;
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    console.log("Escuchando en el servidor");
})