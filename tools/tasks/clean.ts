import * as async from 'async';
import {join} from 'path';
import * as util from 'gulp-util';
import * as chalk from 'chalk';
import * as del from 'del';

import {APP_JS, APP_DEST_SRC} from '../config';

export = function clean(gulp, plugins, option) {
    return function(done) {

        switch (option) {
            case 'all': cleanAll(done); break;
            case 'dist': cleanDist(done); break;
            case 'www': cleanWWW(done); break;
            case 'bower': cleanBower(done); break; 
            
            case 'tsd': cleanTsd(done); break;
            case 'libs': cleanLibs(done); break; 
            
            case 'platforms' : cleanPlatforms; break;
            case 'plugins' : cleanPlugins; break;
            default: done();
        }

    };
};

function cleanAll(done) {
    async.parallel([
        cleanDist,
        cleanWWW,
        cleanBower,
        cleanLibs,
        cleanPlatforms
    ], done);
}

function cleanTsd(done) {
    del('tools/typings/tsd').then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

function cleanPlugins(done) {
    del('plugins').then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

function cleanPlatforms(done) {
    del('platforms').then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
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
    ];

    del(files).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

