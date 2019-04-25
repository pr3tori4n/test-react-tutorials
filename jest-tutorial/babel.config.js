module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-react"];
  const plugins = ["transform-es2015-modules-commonjs"];

  return {
      presets,
      plugins
  };
}