import {join} from 'path';
import {ASSETS_SRC, 
        APP_WWW, 
        DEPENDENCIES,
        ENV,
        ENVIRONMENTS} from '../config';
import {transformPath, templateLocals} from '../utils';

/*
    Use template index.html from src/assets/index.html to
    1. create shims references
    2. constan insertions into the template
*/
export = function buildIndex(gulp, plugins) {
  return function () {
    return gulp.src(join(ASSETS_SRC, 'index.html'))
      // NOTE: There might be a way to pipe in loop.
      .pipe(inject('shims'))
      .pipe(inject('libs'))
      .pipe(inject())
      .pipe(plugins.template(templateLocals()))
      .pipe(gulp.dest(APP_WWW));
  };


  function inject(name?: string) {
    return plugins.inject(gulp.src(getInjectablesDependenciesRef(name), { read: false }), {
      name,
      transform: transformPath(plugins, ENV)
    });
  }

  function getInjectablesDependenciesRef(name?: string) {
    return DEPENDENCIES
      .filter(dep => dep['inject'] && dep['inject'] === (name || true))
      .map(mapPath);
  }

  function mapPath(dep) {
    let envPath = dep.src;
    if (envPath.startsWith(ASSETS_SRC)) {
      envPath = join(APP_WWW, dep.src.replace(ASSETS_SRC, ''));
    }
    return envPath;
  }
};
