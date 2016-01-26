/*
    TypeScript based modular Gulpfile framework
    idea based on https://github.com/mgechev/angular2-seed
    
*/
import * as gulp from 'gulp';
import {runSequence, task} from './tools/utils';
import {APP_TITLE, DEV_DEPENDENCIES} from './tools/config';

//default tasks displays all of the gulp tasks avaiable
gulp.task('default', task('defaultTask'));

//clean
gulp.task('clean', task('clean', 'all'));
gulp.task('clean.dist', task('clean', 'dist'));
//clean bower dependecies
gulp.task('clean.bower', task('clean', 'bower'));
gulp.task('clean.libs', task('clean', 'libs'));

gulp.task('clean.tsd', task('clean', 'tsd'));

//clean the deployment folder
gulp.task('clean.www', task('clean', 'www'));

gulp.task('t', function(){
   console.log(APP_TITLE); 
});
// platforms.
gulp.task('cordova.platforms', done =>
    runSequence('remove.platforms'
        , 'add.platforms'
        , done));

gulp.task('cordova.plugins', done =>
    runSequence('add.plugins'
        , done));
                        
// Build dev.
gulp.task('build.dev', done =>
    runSequence('clean',
        'tslint',
        //   'build.assets.dev',
        'build.js.dev',
        //   'build.index.dev',
        done));

gulp.task('libs', done =>
    runSequence('clean.libs',
        'libs'
        , done));

gulp.task('tsd', done =>
    runSequence('clean.tsd',
        'tsd'
        , done));
              
 gulp.task('index',       task('build.index.dev'));        