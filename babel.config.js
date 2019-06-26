const presets = [
  [
    "@babel/env",
    {
      targets: {
        ie: "11",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs:"2.6.9",
    },
  ],
];

const plugins = ['@babel/plugin-transform-runtime', "@babel/plugin-transform-arrow-functions"]


module.exports = { presets, plugins };
