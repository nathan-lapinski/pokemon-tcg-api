/**
 * Default Environment Configuration, used for local development
 * This object will be clobbered by the entrypoint when deployed
 */
const env: EnvConf = {
    'API_URL': 'http://localhost',
    'API_PORT': 3000,
    'UI_URL': 'http://localhost:4200/',
    'IS_LOCAL': true
};

interface EnvConf {
    'API_URL': string;
    'API_PORT': number;
    'UI_URL': string;
    'IS_LOCAL': boolean;
}

export = env;
