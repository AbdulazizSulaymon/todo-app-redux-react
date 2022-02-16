const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@pages": "src/pages",
    "@functions": "src/functions",
    "@redux": "src/redux",
    "@types": "src/redux/types",
    "@actions": "src/redux/actions",
    "@components": "src/components",
    "@miniComponents": "src/components/miniComponents",
  })(config);

  return config;
};
