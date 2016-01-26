import {join} from 'path';
import * as util from 'gulp-util';
import * as chalk from 'chalk';
import * as del from 'del';

import {APP_JS, WIN_SHIM} from '../config';


export = function clean(gulp, plugins, option) {
    return function(done) {

        switch (option) {
            case 'all': cleanAll(done); break;
            case 'dist': cleanDist(done); break;
            default: done();
        }

    };
};

function cleanAll(done) {
    async.parallel([
        cleanDist,
    ], done);
}

function cleanDist(done) {
    let files = [
        join(APP_JS, '*.js')
        , join(APP_JS, '**', '*.js')
        , join(APP_JS, '*.map')
        , "!" + join(APP_JS, WIN_SHIM)
    ];

    del(files).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

