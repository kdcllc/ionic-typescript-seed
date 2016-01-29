module kdc.services.log {
    'use strict';

    angular
        .module(kdc.constants.logService)
        .config(config);

    config.$inject = ['$provide'];
    function config($provide: ng.auto.IProvideService): void {
        $provide.decorator('$exceptionHandler', extendLog);
    }

    extendLog.$inject = ['$delegate'];
    function extendLog($delegate: ng.IExceptionHandlerService): ng.IExceptionHandlerService {
        //var debugFunction = $delegate.debug;
        // $delegate.debug = (...args: any[]): void => {
        //     var now = (new Date()).toLocaleTimeString();
        //     args[0] = now + ' - ' + args[0];
        //     debugFunction.apply(null, args);
        // };
        
        
        return function(exception, cause) {

            var message;

            if (!exception.message) {
                if (!exception) {
                    message = "An unknown error ocurred in an Angular event.";
                } else {
                    message = exception;
                }

            } else {
                message = exception.message;
            }

            if (!cause) {
                cause = "[Unknown]";
            }

            message += (new Date()).toLocaleTimeString();
            //console.debug(message);
            var ex;
            //ex.stack = exception.stack;
            
            // StackTrace.get().then((value: StackTrace.StackFrame[]) => {
            //      ex = new Error(message + ' Trace: ' + formatStackTrace(value));
            //     // Delegate to the default/base Angular behavior.
            //     $delegate(ex, cause);
            // });

        $delegate(exception, cause);

        }; //funtion(exeption, cause)

    }//extendLog 

    function formatStackTrace(stackTrace: StackTrace.StackFrame[]): string {
        var result = '';
        if (!stackTrace) {
            return result;
        }


        stackTrace.forEach((traceEntry: StackTrace.StackFrame, index: number) => {
            var functionName: string = traceEntry.functionName;
            var fileAndLineInfo: string = traceEntry.fileName + ' ' + traceEntry.columnNumber;

            // Update the line with the shorter 
            var info = 'functionName: ' + functionName + "@" + fileAndLineInfo;

            result = result + info;
        });

        return result;
    }

}
