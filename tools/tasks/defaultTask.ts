import * as util from 'gulp-util';

/*
    dipslays the all of the tasks avaiable for the project
*/
export = function defaultTask(gulp, plugins, option) {
    return plugins.taskListing();
};