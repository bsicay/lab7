module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: 3.3,
          useBuiltIns: 'usage',
          targets: '>0.25%, not dead, not ie 11',
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
  };
  