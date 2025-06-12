export default {
  plugins: {
    "postcss-import": {},
    "@csstools/postcss-cascade-layers": {
      onImportLayerRule: "warn",
    },
    "postcss-variable-compress": {},
    autoprefixer: {},
    "postcss-preset-env": {
      features: {},
    },
    cssnano: {
      preset: "default",
    },
  },
};
