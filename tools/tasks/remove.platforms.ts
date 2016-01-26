import {cordovaPlatforms} from '../utils/cordova';

export = function removePlatforms(gulp, plugins, option) {

   return cordovaPlatforms('remove');
   
};