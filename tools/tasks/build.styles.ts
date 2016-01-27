import {join} from 'path';
import {ASSETS_STYLES, 
        SASS_INDEX,
        SASS, 
        APP_WWW_CSS,
        ENV,
        ENVIRONMENTS} from '../config';


/*
    Compiles SASS into css based on --env prod or dev, default dev
*/
export = function buildStyles(gulp, plugins) {
    let sassConfig = {
        outputStyle: (ENV === ENVIRONMENTS.DEVELOPMENT) ? "nested" : "compressed",
        errLogToConsole: false
    };
    
  return function () {
    
    return gulp.src(SASS_INDEX)
         .pipe(plugins.sourcemaps.init())
         .pipe(plugins.sass(sassConfig).on("error", sassReporter))
         .pipe(plugins.rename("bundle.css"))
         .pipe(plugins.sourcemaps.write("./"))
        .pipe(gulp.dest(APP_WWW_CSS));
  };
}

function sassReporter (failure) {
    let file = failure.message.split("\n")[0];
    let message = failure.message.split("\n")[1];
    console.log("[sass] [" + failure.name.toLowerCase() + "] " + file + ":" + message);
}