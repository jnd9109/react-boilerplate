function conf(api) {
  api.cache(true);

  const presets = [
//    [
      '@babel/preset-env',
//     {
//          targets: {
//          browsers: [''],
//     },
//      },
//    ],
    '@babel/preset-react',
    '@babel/preset-flow',
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ];

  return {
    presets,
    plugins,
  };
}

module.exports = conf;

