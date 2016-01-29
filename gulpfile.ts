/*
    TypeScript based modular Gulpfile framework
    idea based on https://github.com/mgechev/angular2-seed
    
*/
import * as gulp from 'gulp';
import {runSequence, task} from './tools/utils';
import {APP, ENV, DEPENDENCIES} from './tools/config';

//default tasks displays all of the gulp tasks avaiable
gulp.task('default', task('defaultTask'));

// clean
gulp.task('clean', task('clean', 'all'));
gulp.task('clean.src', task('clean', 'src'));

gulp.task('clean.bower', task('clean', 'bower'));
gulp.task('clean.npm', task('clean', 'npm'));
gulp.task('clean.tsd', task('clean', 'tsd'));

gulp.task('clean.platforms', task('clean', 'platforms'));
gulp.task('clean.plugins', task('clean', 'plugins'));

gulp.task('clean.www', task('clean', 'www'));
gulp.task('clean.js', task('clean', 'js'));
gulp.task('clean.libs', task('clean', 'libs'));
gulp.task('clean.sass', task('clean', 'sass'));
gulp.task('clean.templates', task('clean', 'templates'));

gulp.task('t', function(){
   console.log(APP); 
   console.log(ENV);
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
gulp.task('build', done =>
    runSequence('clean.src',
                'clean.js',
                'clean.templates',
                 'tslint',
                 'build.js',
                 'build.templates',
                 'build.styles',
                 "build.index",
        done));

gulp.task('build.libs', done =>
    runSequence('clean.libs',
                'build.libs'
                , done));

gulp.task('tsd', done =>
    runSequence('clean.tsd',
                'tsd'
                , done));
              
 gulp.task('build.index',       task('build.index'));   
 
 gulp.task('build.styles', done =>
    runSequence('clean.sass',
                'build.styles'
                , done));
 
 gulp.task('build.templates', done =>
    runSequence('clean.templates',
                'build.templates'
                , done));

 gulp.task('build.js', done =>
    runSequence('clean.js',
                'tslint',
                'build.js'
                , done));

// --------------
// Watch.
gulp.task('build.watch', done =>
  runSequence('build',
              'watch',
              done));