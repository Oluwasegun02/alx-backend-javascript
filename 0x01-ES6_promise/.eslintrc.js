module.exports = {
    plugins: ["jest"],
    rules: {
      "no-console": "off",
      "no-shadow": "off",
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    },
  };
  