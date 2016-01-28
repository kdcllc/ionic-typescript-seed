import {readFileSync} from 'fs';
import {resolve} from 'path';
import {argv} from 'yargs';
import {normalize, join} from 'path';
import {IApp, HybridApplication} from './utils/application';

// --------------
// Configuration.

export const ENVIRONMENTS = {
    DEVELOPMENT: 'dev',
    PRODUCTION: 'prod'
};

// See: http://content-security-policy.com/
export const CONNETC_SRC = ' https://www.kingdavidconsulting.com/ http://www.kingdavidconsulting.com/ ws://localhost:35279 ws://localhost:35729';

export const PROJECT_ROOT = normalize(join(__dirname, '..'));

// application related configutaion
export const APP_BASE = argv['base'] || '/';
export const APP: IApp = appApp();
export const ENV = getEnvironment();

// source files
export const APP_SRC = 'src/app';
export const ASSETS_SRC = `src/assets`;
//SASS files
export const ASSETS_STYLES = 'src/styles';
export const SASS_INDEX = `${ASSETS_STYLES}/index.scss`;
export const SASS = `${ASSETS_STYLES}/**/*.scss`;

// templates
export const TEMPLATES = `${APP_SRC}/**/*.html`;


// distribution 
export const APP_WWW = 'www';
export const APP_WWW_JS = `${APP_WWW}/js`;
export const APP_WWW_LIBS = `${APP_WWW}/lib`;
export const APP_WWW_CSS = `${APP_WWW}/css`;

// clean locations
export const TSD = 'tools/typings/tsd';
export const PLUGINGS = 'plugins';
export const PLATFORMS = 'platforms';
export const BOWER_COMPONENTS = 'bower_components';
export const NODE_MODULES = 'node_modules';

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
    { src: 'angular-cache/angular-cache.js', inject: 'libs', dest: JS_DEST },
    { src: 'ngCordova/ng-cordova.js', inject: 'libs', dest: JS_DEST },
    { src: 'lodash/lodash.js', inject: 'libs', dest: JS_DEST },
    { src: 'stacktrace-js/stacktrace.js', inject: 'libs', dest: JS_DEST }
]);
export const DEV_NPM_DEPENDENCIES: InjectableDependency[] = normalizeNpmDependencies([
    { src: 'arrify/index.js', inject: 'shims', dest: JS_DEST },
    { src: 'beeper/index.js', inject: 'libs', dest: JS_DEST }
]);

export const DEPENDENCIES = DEV_BOWER_DEPENDENCIES;

export function appApp(): IApp {
   return new HybridApplication().getAppInfo();
   //return appInfo().name;
}

// --------------
// Private.

function normalizeBowerDependencies(deps: InjectableDependency[]) {
    deps
        .filter(d => !/\*/.test(d.src)) // Skip globs
        .forEach(d => d.src = resolve('www/lib/' + d.src ));
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