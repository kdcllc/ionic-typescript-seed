import * as async from 'async';
import * as util from 'gulp-util';
import * as chalk from 'chalk';
import * as del from 'del';

export = function clean(gulp, plugins, option) {
  return function (done) {

    switch (option) {
      case 'all'    : cleanAll(done);     break;
      case 'dist'   : cleanDist(done);    break;
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
  var files = [].concat(
        
         "./www/js/*.js"
        , "!./www/js/winstore-jscompat.js"
        , "./www/js/*.map"

    ); 
    
  del(files).then((paths) => {
    util.log('Deleted', chalk.yellow(paths && paths.join(', ') || '-'));
    done();
  });
}

