import {join} from 'path';
import {APP_SRC,
        ASSETS_SRC,
        ASSETS_STYLES} from '../config';

export = function watch(gulp, plugins) {
  return function () {
    plugins.watch([
        join(APP_SRC, '**/*'),                  //ts and html files
        join(ASSETS_SRC, '**/*'),               //index.html
        join(ASSETS_STYLES, '**/*')]            //compile sass styles after modification
        , () => gulp.start('build'));
  };
};