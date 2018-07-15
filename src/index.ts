import * as express from "express";
import * as bodyParser from "body-parser";
import * as openapi from "express-openapi";
import * as apiDoc from "./api-v1/api-doc";
import * as settings from './settings';

const allowCrossDomain = (req, res, next) => {
    const origin = req.get('Origin');
    const domainWhitelist = [
        new RegExp("http(s)?://(www\\.)?localhost", "i")
    ];

    // if a whitelisted domain begins with current origin
    if (domainWhitelist.some((domainRegex) => domainRegex.test(origin)))
    {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', ['Content-Type', 'X-Requested-With']);
    res.header('Access-Control-Expose-Headers', 'Link');

    next();
};

const app = express();
app.use(allowCrossDomain);
app.use(bodyParser.json());

openapi.initialize({
    'apiDoc': apiDoc,
    'app': app,
    'paths': settings.api.paths,
    'errorMiddleware': (error, req, res, next) => {
        console.log('Add some error middleware!!');

        res.status(500);
        res.json({msg: 'an error has occured'});
    }
});

app.listen(settings.api.port);

console.dir(app._router.stack);

export default app;
