/* jshint esversion: 6 */

const presets = [
  [
    "@babel/env",
    {
      targets: {
        chrome: "71",
        firefox: "64",
        safari: "12",
        opera: "55",
        edge: "17",
      },
      useBuiltIns: "usage";
    },
  ],
];

module.exports = { presets };