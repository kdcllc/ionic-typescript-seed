import {readFileSync} from 'fs';
import {argv} from 'yargs';
import {normalize, join} from 'path';

// --------------
// Configuration.

const ENVIRONMENTS = {
  DEVELOPMENT: 'dev',
  PRODUCTION: 'prod'
};

export const ENV                  = getEnvironment();
export const APP_SRC              = 'app';

//export const APP_DEST             = `dist/${ENV}`;
export const APP_DEST             = `www/js`;
export const TOOLS_DIR            = 'tools';

export function appVersion(): number|string {
  var pkg = JSON.parse(readFileSync('package.json').toString());
  return pkg.version;
}


//private

function getEnvironment() {
  let base = argv['_'];
  let prodKeyword = !!base.filter(o => o.indexOf(ENVIRONMENTS.PRODUCTION) >= 0).pop();
  if (base && prodKeyword || argv['env'] === ENVIRONMENTS.PRODUCTION) {
    return ENVIRONMENTS.PRODUCTION;
  } else {
    return ENVIRONMENTS.DEVELOPMENT;
  }
}