import {join} from 'path';
import {TEMPLATES,
        APP_WWW_JS,
        ENV,
        ENVIRONMENTS} from '../config';


/*
    Angular Templates generation
*/
export = function buildTemplates(gulp, plugins) {
  //TODO add minification based on prod
  return function () {
    
    return gulp.src(TEMPLATES)
         .pipe(plugins.angularTemplatecache({
            "filename": "templates.js",
            "root": "templates",
            "module": "templates",
            standalone: true
        }))
       .pipe(gulp.dest(APP_WWW_JS));
  };
}

function sassReporter (failure) {
    let file = failure.message.split("\n")[0];
    let message = failure.message.split("\n")[1];
    console.log("[sass] [" + failure.name.toLowerCase() + "] " + file + ":" + message);
}