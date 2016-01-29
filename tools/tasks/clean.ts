import * as async from 'async';
import {join} from 'path';
import * as util from 'gulp-util';
import * as chalk from 'chalk';
import * as del from 'del';

import {
        TSD,
        PLUGINGS,
        PLATFORMS,
        APP_WWW_LIBS,
        BOWER_COMPONENTS,
        NODE_MODULES,
        APP_SRC,
        APP_WWW_JS,
        APP_WWW_CSS
       
        } from '../config';

 let www_js = [
        join(APP_WWW_JS, '*.js')
        , join(APP_WWW_JS, '**', '*.js')
        , join(APP_WWW_JS, '*.map')

    ];

 let src_js = [
        join(APP_SRC, '*.js')
        , join(APP_SRC, '**', '*.js')
        , join(APP_SRC, '*.map')

    ];

export = function clean(gulp, plugins, option) {
    return function(done) {

        switch (option) {
            case 'all': cleanAll(done); break;
            case 'src': cleanSrc(done); break;
            //www folder
            case 'www': cleanWWW(done); break;
            case 'js': cleanJs(done); break;
            case 'libs': cleanLibs(done); break;
            case 'sass': cleanSASS(done); break;
            case 'templates': cleanTemplates(done); break;
            
            case 'bower': cleanBower(done); break;
            case 'npm': cleanNPM(done); break;
            case 'tsd': cleanTsd(done); break;

            case 'platforms': cleanPlatforms; break;
            case 'plugins': cleanPlugins; break;
            default: done();
        }

    };
};

function cleanAll(done) {
    async.parallel([
        cleanSrc,
        
        cleanWWW,
        cleanJs,
        cleanLibs, 
        cleanSASS,
        cleanTemplates,
        
        cleanBower,
        cleanNPM,
        cleanTsd,
       
        cleanPlatforms,
        cleanPlugins
    ], done);
}

function cleanTemplates(done) {
    del(join(APP_WWW_JS, '/templates.js')).then((paths) => {
 
        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

function cleanSASS(done) {
    del(APP_WWW_CSS).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

function cleanTsd(done) {
    del(TSD).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

function cleanPlugins(done) {
    del(PLUGINGS).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

function cleanPlatforms(done) {
    del(PLATFORMS).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

function cleanLibs(done) {
    del(APP_WWW_LIBS).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}
function cleanBower(done) {
    del(BOWER_COMPONENTS).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

function cleanNPM(done) {
    del(NODE_MODULES).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

function cleanSrc(done) {
    del(src_js).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

/*
   Cleans the TypeScript generated JavaScript not templates cache  
*/
function cleanJs(done) {
    let files = www_js.concat(
      join("!" +   APP_WWW_JS , "templates.js")
    );
  
    del(files).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

/*
    Clean
    
    +--- www    
            +---js
            +---css
            +---libs
*/
function cleanWWW(done) {
    let files = www_js.concat(
        [APP_WWW_CSS, APP_WWW_LIBS]
    );
       
    del(files).then((paths) => {

        paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
    });
}

function log(paths, done) {
     paths.forEach(path => {
            util.log('Deleted: ', chalk.yellow(path));
        });

        done();
};

