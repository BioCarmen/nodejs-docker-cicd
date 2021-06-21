import * as express from 'express';
import * as routerv1 from './v1.0.0'

var app = express.Router();

app.use('/v1.([0-9]).([0-9])', routerv1);

export = app;