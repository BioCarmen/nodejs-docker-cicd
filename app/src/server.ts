import * as express from 'express';
var app = express();

require('dotenv').config();

import * as router from './api/index'
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as swaggerUi from 'swagger-ui-express'
import swaggerDocument from './api/config/swagger';
import * as http from 'http';

var APP_PORT = 3025

var server = http.createServer(app)
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set('port', (APP_PORT));
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

console.log("Dev/Prod Environment")
app.use('/', router);
server.listen(app.get('port'), () => {
    console.log('Listening on port ' + app.get('port'))
});
