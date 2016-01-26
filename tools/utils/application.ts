import * as fs from 'fs';
import * as xmldom from 'xmldom';
import * as xpath from 'xpath';

module app {
    export interface IApp {
        name: string;
    }

    export class HybridApplication implements IApp {
        name: string;

        constructor() {
            this.name = 'App from the Class';
        }

        public getAppInfo(): IApp {
            // Remove the schemes node from the config.xml file.
            var configRaw = fs.readFileSync("config.xml", "utf8");
            let XmlDom = new xmldom.DOMParser();
            
            let configXmlDoc =  XmlDom.parseFromString(configRaw);
            //configXmlDoc.removeChild(xpath.select1("/*[local-name() = 'widget']/*[local-name() = 'schemes']", configXmlDoc));

            return { name: 'Get An App' };
        };
    }
}

export = app;