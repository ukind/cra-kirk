const CracoSwcPlugin = require('craco-swc');

module.exports = {
  plugins: [
    {
      plugin: CracoSwcPlugin,
      options: {
        swcLoaderOptions: {
          jsc: {
            target: 'es2021',
            parser: {
              syntax: 'typescript',
              tsx: true,
              dynamicImport: true,
              privateMethod: true,
              functionBind: true,
              exportDefaultFrom: true,
              exportNamespaceFrom: true,
              decorators: true,
              decoratorsBeforeExport: true,
              topLevelAwait: true,
              importMeta: true,
            },
          },
        },
      },
    },
  ],
};
