import * as async from 'async';
import {join} from 'path';
import * as util from 'gulp-util';
import * as chalk from 'chalk';
import * as del from 'del';

import {APP_JS, WIN_SHIM, APP_DEST_SRC} from '../config';

export = function clean(gulp, plugins, option) {
    return function(done) {

        switch (option) {
            case 'all': cleanAll(done); break;
            case 'dist': cleanDist(done); break;
            case 'www': cleanWWW(done); break;
            case 'bower': cleanBower(done); break; 
            case 'libs': cleanLibs(done); break; 
            default: done();
        }

    };
};

function cleanAll(done) {
    async.parallel([
        cleanDist,
        cleanWWW,
        cleanBower,
        cleanLibs
        
    ], done);
}
function cleanLibs(done) {
    del('src/assets/libs').then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}
function cleanBower(done) {
    
    del('bower_components').then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

function cleanDist(done) {
    
    del(APP_DEST_SRC).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

function cleanWWW(done) {
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

