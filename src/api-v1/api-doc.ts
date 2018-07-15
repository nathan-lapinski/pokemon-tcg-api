import {OpenApi} from "express-openapi";
import * as settings from '../settings';

const apiDoc: OpenApi.ApiDefinition = {
    'swagger': '2.0',
    'basePath': settings.api.base_path,
    'info': {
        'title': settings.api.doc.title,
        'description': settings.api.doc.description,
        'version': settings.api.doc.version
    },
    'paths': {},
    'securityDefinitions': {
        
    },
    'definitions': {
        
    },
    'security': [
    ]
};

export = apiDoc;
