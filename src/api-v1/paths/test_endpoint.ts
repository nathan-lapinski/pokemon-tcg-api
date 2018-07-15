import {Operation} from "express-openapi";

export const get: Operation = [
    (req, res) => {
        res.status(200);
        res.json({data: 'hiiiii'});
    }
];

get.apiDoc = {
    'description': 'testing',
    'operationId': 'testing',
    'tags': ['testing'],
    'parameters': [],
    'responses': {
        'default': {
            'description': 'Unexpected Error'
        }
    }
};
