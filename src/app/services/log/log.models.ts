module kdc.services.log {
    
    export class LogEntry {
        public id: string;
        public timestamp: Date;
        public level: LogLevel;
        public tag: string;
        public message: string;
        public metadata: any;
    }


     export enum LogLevel {
        TRACE = 0,
        DEBUG = 1,
        INFO = 2,
        WARN = 3,
        ERROR = 4,
        FATAL = 5
    }
    
    
}