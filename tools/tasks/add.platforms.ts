import {cordovaPlatforms} from '../utils/cordova';

export = function addPlatforms(gulp, plugins, option) {
    return cordovaPlatforms('add');
};