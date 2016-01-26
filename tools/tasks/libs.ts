import {exec} from 'child_process';

export = function libs(gulp, plugins, option) {

    return function(done) {
        exec("bower-installer", function(err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            done(err);
        });
    };
}
