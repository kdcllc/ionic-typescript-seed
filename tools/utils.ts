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
