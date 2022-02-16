const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@pages": "src/pages",
    "@redux": "src/redux",
    "@types": "src/redux/types",
    "@components": "src/components",
    "@miniComponents": "src/components/miniComponents",
  })(config);

  return config;
};
