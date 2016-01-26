import {cordovaPlugins} from '../utils/cordova';

export = function removePlugins(gulp, plugins, option) {

    return cordovaPlugins('remove');

};