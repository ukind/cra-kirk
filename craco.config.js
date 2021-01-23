const CracoSwcPlugin = require("craco-swc");

module.exports = {
  plugins: [
    {
      plugin: CracoSwcPlugin,
      options: {
        swcLoaderOptions: {
          jsc: {
            externalHelpers: true,
            target: "es2015",
            parser: {
              exportDefaultFrom: true,
              syntax: 'typescript',
              tsx: true,
              decorators: true,
              dynamicImport: true,
            },
          },
        },
      },
    },
  ],
};