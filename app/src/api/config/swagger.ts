import swaggerPaths from '../swagger/swagger_paths';
import swaggerDefintions from '../swagger/swagger_definitions';
import swaggerTags from '../swagger/swagger_tags';

var host1 = 'http://localhost:3025/v1.0.0'
export default {
    "openapi": "3.0.3",
    "info": {
        "version": "1.0.0",
        "title": "Swagger API documentation",
        "description": "",
        "contact": {
            "email": "sajigeorge.joe@gmail.com"
        }
    },
    "servers": [
        {
            "url": host1,
            "description": "local server"
        }
    ],
    "tags": swaggerTags,
    "paths": swaggerPaths,
    "components": swaggerDefintions,
}