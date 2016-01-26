import {cordovaPlugins} from '../utils/cordova';

export = function addPlugins(gulp, plugins, option) {
    return cordovaPlugins('add');
};