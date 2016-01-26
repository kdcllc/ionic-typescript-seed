import {readFileSync} from 'fs';
import {resolve} from 'path';
import {argv} from 'yargs';
import {normalize, join} from 'path';
import {IApp, HybridApplication} from './utils/application';

// --------------
// Configuration.

const ENVIRONMENTS = {
    DEVELOPMENT: 'dev',
    PRODUCTION: 'prod'
};

export const PROJECT_ROOT = normalize(join(__dirname, '..'));

export const APP_BASE = argv['base'] || '/';
export const APP: IApp = appApp();

export const ENV = getEnvironment();
export const APP_SRC = 'src/app';
export const ASSETS_SRC = `src/assets`;

export const APP_WWW = 'www';

export const APP_DEST = `dist/${ENV}`;
export const APP_DEST_SRC = `dist/${ENV}/src`;

export const APP_JS = `${APP_WWW}/js`;
export const JS_DEST = `${APP_WWW}/js`;


export const APP_LIB = `${APP_WWW}/lib`;

export const TOOLS_DIR = 'tools';

interface InjectableDependency {
    src: string;
    inject: string | boolean;
    dest?: string;
}



// Declare Bower dependencies (Note that globs should not be injected).
export const DEV_BOWER_DEPENDENCIES: InjectableDependency[] = normalizeBowerDependencies([
    { src: 'winstore-jscompat/winstore-jscompat.js', inject: 'shims', dest: JS_DEST },
    { src: 'ionic/js/ionic.bundle.js', inject: 'libs', dest: JS_DEST },
    { src: 'angular-cache/dist/angular-cache.min.js', inject: 'libs', dest: JS_DEST },
    { src: 'ngCordova/dist/ng-cordova.js', inject: 'libs', dest: JS_DEST },
    { src: 'lodash/lodash.js', inject: 'libs', dest: JS_DEST },
    { src: 'stacktrace-js/dist/stacktrace.js', inject: 'libs', dest: JS_DEST }
]);
export const DEV_NPM_DEPENDENCIES: InjectableDependency[] = normalizeNpmDependencies([
    { src: 'arrify/index.js', inject: 'shims', dest: JS_DEST },
    { src: 'beeper/index.js', inject: 'libs', dest: JS_DEST }
]);

export const DEV_DEPENDENCIES = DEV_BOWER_DEPENDENCIES;

export function appApp(): IApp {
   return new HybridApplication().getAppInfo();
   //return appInfo().name;
}

export function appVersion(): number | string {
    var pkg = JSON.parse(readFileSync('package.json').toString());
    return pkg.version;
}

// --------------
// Private.

function normalizeBowerDependencies(deps: InjectableDependency[]) {
    deps
        .filter(d => !/\*/.test(d.src)) // Skip globs
        .forEach(d => d.src = resolve('bower_components/' + d.src ));
    return deps;
}

function normalizeNpmDependencies(deps: InjectableDependency[]) {
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