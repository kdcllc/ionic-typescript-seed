import * as fs from 'fs';
import * as xmldom from 'xmldom';
import * as xpath from 'xpath';

/*
    Returns information from Congif.xml file to be used within the gulpfile.ts
*/
module utils {
    export interface IApp {
        name: string;
        email: string;
        websiteUrl: string;
        majorVersion: number | string;
        minorVersion: number | string;
        buildVersion: number | string;
    }

    export class HybridApplication implements IApp {
        name: string;
        email: string;
        websiteUrl: string;
        majorVersion: number | string;
        minorVersion: number | string;
        buildVersion: number | string;
        constructor() {
            this.name = 'App from the Class';
        }

        public getAppInfo(): IApp {
            // Remove the schemes node from the config.xml file.
            var configRaw = fs.readFileSync("config.xml", "utf8");
            let XmlDom = new xmldom.DOMParser();

            let configXmlDoc = XmlDom.parseFromString(configRaw);
            //configXmlDoc.removeChild(xpath.select1("/*[local-name() = 'widget']/*[local-name() = 'schemes']", configXmlDoc));
            
            try {
                this.name = xpath.select1("/*[local-name() = 'widget']/*[local-name() = 'name']/text()", configXmlDoc).toString();
            } catch (err) {

            }

            try {
                this.email = xpath.select1("/*[local-name() = 'widget']/*[local-name() = 'author']/@email", configXmlDoc).value;
            } catch (err) {

            }

            try {
                this.websiteUrl = xpath.select1("/*[local-name() = 'widget']/*[local-name() = 'author']/@href", configXmlDoc).value;
            } catch (err) {
                
            }
            
            // Attempt to query and parse the version information from config.xml.
            // Default to 0.0.0 if there are any problems.
            try {
                let versionString = xpath.select1("/*[local-name() = 'widget']/@version", configXmlDoc).value;
                let versionParts = versionString.split(".");
                this.majorVersion = parseInt(versionParts[0], 10);
                this.minorVersion = parseInt(versionParts[1], 10);
                this.buildVersion = parseInt(versionParts[2], 10);
            } catch (err) {
                console.log("Error parsing version from config.xml; using 0.0.0 instead.", err);
            }

            return this;
        };
    }
}

export = utils;