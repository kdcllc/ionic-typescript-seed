/*
    TypeScript based modular Gulpfile framework
    idea based on https://github.com/mgechev/angular2-seed
    
*/
import * as gulp from 'gulp';
import {runSequence, task} from './tools/utils';
import {appVersion} from './tools/config';

//default tasks displays all of the gulp tasks avaiable
gulp.task('default',    task('defaultTask'));

//clean
gulp.task('clean',       task('clean', 'all'));
gulp.task('clean.dist',  task('clean', 'dist'));

// platforms.
gulp.task('cordova:platforms', done =>
         runSequence('remove.platforms'
                     , 'add.platforms'
                     , done));

gulp.task('cordova:plugins', done =>
         runSequence(  'add.plugins'
                        , done));
                        
// Build dev.
gulp.task('build.dev', done =>
  runSequence('clean.dist',
              'tslint',
            //   'build.assets.dev',
              'build.js.dev',
            //   'build.index.dev',
              done));
              
 gulp.task('tsd',       task('tsd'));             