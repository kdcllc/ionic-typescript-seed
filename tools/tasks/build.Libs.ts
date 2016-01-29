import {exec} from 'child_process';
/*
    installs only dependecies from the bower packages into folder
    specified in bower.json file
*/
export = function buildLibs(gulp, plugins, option) {

    return function(done) {
        exec("bower-installer", function(err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            done(err);
        });
    };
}
