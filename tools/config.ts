import {readFileSync} from 'fs';
import {argv} from 'yargs';
import {normalize, join} from 'path';

// --------------
// Configuration.

const ENVIRONMENTS = {
    DEVELOPMENT: 'dev',
    PRODUCTION: 'prod'
};

export const PROJECT_ROOT = normalize(join(__dirname, '..'));

export const APP_BASE = argv['base'] || '/';
export const APP_TITLE = appTitle();

export const ENV = getEnvironment();
export const APP_SRC = 'src/app';
export const ASSETS_SRC = `${APP_SRC}/assets`;

export const APP_WWW = 'www';

export const APP_DEST = `dist/${ENV}`;
export const APP_DEST_SRC = `dist/${ENV}/src`;

export const APP_JS = `${APP_WWW}/js`;
export const JS_DEST = `${APP_WWW}/js`;


export const APP_LIB = `${APP_WWW}/lib`;

export const TOOLS_DIR = 'tools';

export const WIN_SHIM = 'winstore-jscompat.js';

interface InjectableDependency {
    src: string;
    inject: string | boolean;
    dest?: string;
}


// Declare NPM dependencies (Note that globs should not be injected).
export const DEV_BOWER_DEPENDENCIES: InjectableDependency[] = ([
    { src: PROJECT_ROOT + APP_LIB + '/winstore-jscompat/winstore-jscompat.js', inject: 'shims', dest: JS_DEST },
    { src: PROJECT_ROOT + APP_LIB + '/ionic/js/ionic.bundle.js', inject: 'libs', dest: JS_DEST },
    { src: PROJECT_ROOT + APP_LIB + '/angular-cache/dist/angular-cache.min.js', inject: 'libs', dest: JS_DEST },
    { src: PROJECT_ROOT + APP_LIB + '/ngCordova/dist/ng-cordova.js', inject: 'libs', dest: JS_DEST },
    { src: PROJECT_ROOT + APP_LIB + '/lodash/lodash.js', inject: 'libs', dest: JS_DEST },
    { src: PROJECT_ROOT + APP_LIB + '/stacktrace-js/dist/stacktrace.js', inject: 'libs', dest: JS_DEST }
]);

export const DEV_DEPENDENCIES = DEV_BOWER_DEPENDENCIES;

export function appTitle(): string {
    var pkg = JSON.parse(readFileSync('package.json').toString());
    return pkg.version;
}

export function appVersion(): number | string {
    var pkg = JSON.parse(readFileSync('package.json').toString());
    return pkg.version;
}



// --------------
// Private.

function normalizeDependencies(deps: InjectableDependency[]) {
    deps
        .filter(d => !/\*/.test(d.src)) // Skip globs
        .forEach(d => d.src = require.resolve(d.src));
    return deps;
}

function getEnvironment() {
    let base = argv['_'];
    let prodKeyword = !!base.filter(o => o.indexOf(ENVIRONMENTS.PRODUCTION) >= 0).pop();
    if (base && prodKeyword || argv['env'] === ENVIRONMENTS.PRODUCTION) {
        return ENVIRONMENTS.PRODUCTION;
    } else {
        return ENVIRONMENTS.DEVELOPMENT;
    }
}