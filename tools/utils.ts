export * from './utils/template_injectables';
export * from './utils/template_locals';
export * from './utils/tasks_tools';

export function tsProjectFn(plugins) {
  return plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
  });
}

export function tsProjectFnOld(plugins) {
  return plugins.typescript.createProject('_tsconfig.json', {
    typescript: require('typescript')
  });
}

/**
 * Used to format a string by replacing values with the given arguments.
 * Arguments should be provided in the format of {x} where x is the index
 * of the argument to be replaced corresponding to the arguments given.
 * 
 * For example, the string t = "Hello there {0}, it is {1} to meet you!"
 * used like this: Utilities.format(t, "dude", "nice") would result in:
 * "Hello there dude, it is nice to meet you!".
 * 
 * @param str The string value to use for formatting.
 * @param args The values to inject into the format string.
 */
export function format(formatString) {
    var i, reg;
    i = 0;

    for (i = 0; i < arguments.length - 1; i += 1) {
        reg = new RegExp("\\{" + i + "\\}", "gm");
        formatString = formatString.replace(reg, arguments[i + 1]);
    }

    return formatString;
}