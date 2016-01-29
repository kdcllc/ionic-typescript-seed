# King David Consulting LLC - Ionic Hybrid Application Template

This project template was developed in preparation for [Angular2](https://angular.io/) 
and [TypeScript](http://www.typescriptlang.org/) development for [NativeScript](https://www.nativescript.org/) Hybrid Applications.

As Angular application grows in size and becomes harder to manage the source code base without toolset like TypeScript. 
The entire template project runs on TypeScript code from gulpfile.ts build system to application code. 
The goal was to use TypeScript sufficiently in the project builds by utilizing Gulpfile.ts instead of Gulpfile.js.


WordPress is a popular Content Management System that now exposes its data thru WP-API JSON interfaces.
This template utilizes [WP-API](https://github.com/WP-API/WP-API) plugin.

## Development Tools
* [Visual Studio Code](https://code.visualstudio.com/)
* [Visual Studio.NET 2015](https://www.visualstudio.com/) with [Visual Studio Tools for Apache Cordova](https://taco.visualstudio.com/)

## Machine Global NPM Libraries
1. npm install -g gulp
2. npm install -g bower
3. npm install -g cordova 
4. npm install -g ionic
5. npm install -g tsd

###OR
1. npm -g gulp bower tsd cordova ionic taco-cli

In addition make sure that you have Python 2.5 installed on your machine.

## Project install
1. npm install - node-module dependencies to be loaded (npm, bower and tsd)
2. gulp cordova.platforms / cordova.plugins (installs all of the Apache Cordova platforms and plugins)
3. gulp build (run typescript code to generate the code base for bundle.js, templates.js, index.html and styles)

##WWW deployment folder for the IONIC framework applications

[Bower-installer](https://www.npmjs.com/package/bower-installer)
```
+-- src
|   +-- app
|   +-- assets
|       +-- index.html
|   +-- styles
+-- www
|   +-- css         - sass generated
|   +-- libs        - bower_installer npm package populates the folder
|   +-- js          - typescript compiler generated code
``` 

### Build System of the project
[Gulp]() is a powerful build system that uses stream thru code to prepare and execute the pipelines.

|+-- tools
|       +-- tasks
|       +-- typings
|               +-- tsd
|       +-- utils
|       congif.ts
|       utils.ts
      
```
gulp --env prod build.index
```
## Special Thanks To
* [wpIonic](https://github.com/scottopolis/wpIonic/) project. 
* [Angular2 Seed](https://github.com/mgechev/angular2-seed) project
* [WP-API](https://github.com/WP-API/WP-API) plugin.
* [WordPress custom types as end points](https://wordpress.org/plugins/rest-api-enabler/) project

## Licence ##

The MIT License

Copyright (c) 2014-2016 King David Consulting LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
