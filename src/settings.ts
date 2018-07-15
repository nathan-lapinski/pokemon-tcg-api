import * as env from './env';

const settings: AppSettings = {
    'api': {
        'doc': {
            'title': 'Pokemon TCG API',
            'description': 'API for Pokemon TCG data',
            'version': '1.0.0',
            'parameters' : {
            }
        },
        'base_uri': env.API_URL,
        'base_path': '/v1',
        'paths': 'api-v1/paths',
        'port': env.API_PORT,
        'is_local': env.IS_LOCAL
    },
    'app': {
        'request_limit': 200
    }
};

interface AppSettings {
    'api': {
        'doc': {
            'title': string,
            'description': string,
            'version': string,
            'parameters': {
            }
        };
        'is_local': boolean,
        'base_uri': string,
        'base_path': string,
        'paths': string,
        'port': number
    };
    'app': {
        'request_limit': number
    };
}

export = settings;
