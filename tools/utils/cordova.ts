import * as async from 'async';
import * as util from 'gulp-util';
import * as chalk from 'chalk';
import * as fs from 'fs';
import {exec} from 'child_process';

/*
    loops thru package.json and exectures codrova plugin add command
    
    @cmd: Command Add or Remove
*/
export function cordovaPlugins(cmd: string) {

    let pluginList = JSON.parse(fs.readFileSync("package.json", "utf8")).cordovaPlugins;

    return function(done) {

        async.eachSeries(pluginList, function(plugin: any, eachCb) {
            let pluginName,
                additionalArguments = "";

            if (typeof (plugin) === "object" && typeof (plugin.locator) === "string") {
                pluginName = plugin.locator;

                if (plugin.variables) {
                    Object.keys(plugin.variables).forEach(function(variable) {
                        additionalArguments += " --variable " + variable + "=\"" + plugin.variables[variable] + "\"";
                    });
                }
            } else if (typeof (plugin) === "string") {
                pluginName = plugin;
            } else {
                done(new Error("Unsupported plugin object type (must be string or object with a locator property)."));
                return;
            }

            let cordovaPlugin = "cordova plugin " + cmd + " " + pluginName + additionalArguments;
            
            util.log(chalk.red(cordovaPlugin));
            
            if (cmd === 'remove') {
              cordovaPlugin =  cordovaPlugin.substring(0, cordovaPlugin.indexOf('@'));
            }
            util.log(chalk.yellow(cordovaPlugin));
            
            exec(cordovaPlugin, function(err, stdout, stderr) {
                console.log('stdout: ', stdout);
                console.log('stderr: ', stderr);
                eachCb(err);

            });

        }, done);
    };
}

export function cordovaPlatforms(cmd: string) {
    let platformList = JSON.parse(fs.readFileSync("package.json", "utf8")).cordovaPlatforms;

    return function(done) {
        async.eachSeries(platformList, function(platform: any, eachCb) {
            var platformName,
                additionalArguments = "";

            if (typeof (platform) === "object" && typeof (platform.locator) === "string") {
                platformName = platform.locator;

                if (platform.variables) {
                    Object.keys(platform.variables).forEach(function(variable) {
                        additionalArguments += " --variable " + variable + "=\"" + platform.variables[variable] + "\"";
                    });
                }
            } else if (typeof (platform) === "string") {
                platformName = platform;
            } else {
                done(new Error("Unsupported platform object type (must be string or object with a locator property)."));
                return;
            }

            let cordovaPlatform = "cordova platform " + cmd + " " + platformName + additionalArguments;

            exec(cordovaPlatform, function(err, stdout, stderr) {

                console.log('stdout: ', stdout);
                console.log('stderr: ', stderr);
                eachCb(err);

            });

        }, done);
    };
}