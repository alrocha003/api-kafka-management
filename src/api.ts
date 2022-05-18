'use strict'

import http from 'http';
import * as dotenv from 'dotenv';
import { getJSDocReadonlyTag } from 'typescript';

const HOST: string = 'https://localhost';
const POST: string = 'POST';
const GET: string = 'GET';
const PUT: string = 'PUT';

dotenv.config();


const server = http.createServer((request, response) => {
    
    if (request.method == POST) {
        response.writeHead(httpStatusCode.Created.valueOf());
        response.write(JSON.stringify({ 'message': 'Method POST' }));
        response.end();
    }
    else if (request.method == GET) {
        response.writeHead(httpStatusCode.Ok.valueOf())
        response.write(JSON.stringify({ 'message': process.env.MESSAGE_CONFIG }));
        response.end();
    }
    else if (request.method == PUT) {
        response.writeHead(httpStatusCode.Ok.valueOf())
        response.write(JSON.stringify({ 'message': process.env.MESSAGE_CONFIG }));
        response.end();
    }
    else {
        response.writeHead(httpStatusCode.NotFound.valueOf());
        response.write(JSON.stringify({ "message": "Method not implemented" }));
        response.end();
    }
});

server.listen(process.env.PORT, () => {
    console.info(`Server on ${HOST}:${process.env.PORT}`);
})
